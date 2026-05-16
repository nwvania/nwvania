import { createHash } from "crypto";

type Level = "info" | "warn" | "error";

interface LogEntry {
  level: Level;
  message: string;
  data?: Record<string, unknown>;
  timestamp: string;
}

/** One-way hash of an IP address for GDPR-compliant logging. */
function hashIp(ip: string): string {
  if (!ip || ip === "unknown") return "unknown";
  return createHash("sha256").update(ip + (process.env.LOG_IP_SALT ?? "nwvania")).digest("hex").slice(0, 16);
}

function sanitize(data?: Record<string, unknown>): Record<string, unknown> | undefined {
  if (!data) return undefined;
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(data)) {
    if (k === "ip" && typeof v === "string") {
      out[k] = hashIp(v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

function log(level: Level, message: string, data?: Record<string, unknown>) {
  const entry: LogEntry = {
    level,
    message,
    timestamp: new Date().toISOString(),
    ...(data ? { data: sanitize(data) } : {}),
  };
  const line = JSON.stringify(entry);
  if (level === "error") console.error(line);
  else if (level === "warn") console.warn(line);
  else console.log(line);
}

export const logger = {
  info:  (message: string, data?: Record<string, unknown>) => log("info",  message, data),
  warn:  (message: string, data?: Record<string, unknown>) => log("warn",  message, data),
  error: (message: string, data?: Record<string, unknown>) => log("error", message, data),
};

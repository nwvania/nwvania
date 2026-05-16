"use client";

const CSRF_COOKIE = "nwvania-csrf";
const CSRF_HEADER = "x-csrf-token";

function getCsrfToken(): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${CSRF_COOKIE}=`));
  return match?.split("=").slice(1).join("=").trim() ?? "";
}

/** Drop-in fetch wrapper that injects the CSRF header automatically */
export async function csrfFetch(input: RequestInfo | URL, init: RequestInit = {}): Promise<Response> {
  const token = getCsrfToken();
  return fetch(input, {
    ...init,
    headers: {
      ...init.headers,
      [CSRF_HEADER]: token,
      "Content-Type": "application/json",
    },
  });
}

export default function Loading() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-b from-[#EEF4FF] to-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="h-3 w-24 rounded-full bg-gray-200" />
          <div className="h-10 w-96 rounded-xl bg-gray-200" />
          <div className="h-5 w-72 rounded-lg bg-gray-200" />
        </div>
      </div>

      {/* Content rows skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 rounded-2xl bg-gray-100" />
        ))}
      </div>
    </div>
  );
}

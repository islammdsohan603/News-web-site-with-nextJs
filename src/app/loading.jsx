export default function Loading() {
  return (
    <div className="flex h-[85vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 rounded-full border-4 border-zinc-200 border-t-blue-600 animate-spin" />
        <p className="text-sm text-zinc-500 font-medium">Loading news...</p>
      </div>
    </div>
  );
}

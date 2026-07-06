interface LoadingOverlayProps {
  open: boolean;
}

export default function LoadingOverlay({
  open,
}: LoadingOverlayProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">

      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-white">
          Cropilot AI
        </h2>

        <p className="mt-2 text-gray-400">
          Analyzing your Shopify store...
        </p>

        <div className="mt-8 space-y-4">

          <div className="flex items-center gap-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <p className="text-gray-300">
              Fetching homepage
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <p className="text-gray-300">
              Detecting products
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <p className="text-gray-300">
              Detecting collections
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <p className="text-gray-300">
              Extracting evidence
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            <p className="font-semibold text-blue-400">
              Running Gemini AI...
            </p>
          </div>

        </div>

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-gray-800">

          <div className="h-full w-full animate-pulse rounded-full bg-blue-500" />

        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          This usually takes 15–30 seconds
        </p>

      </div>

    </div>
  );
}
import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="h-full max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div>
            <div className="h-8 w-40 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          <div className="pt-6 border-t">
            <div className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-8">
        <Spinner className="text-green-600" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-green-50 p-8 text-center">
      <div className="max-w-3xl rounded-xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-4xl font-bold text-emerald-800">afghans.fr</h1>
        <div className="mb-8 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
        </div>
        
        <h2 className="mb-8 text-2xl font-semibold text-gray-700">
          Under Construction
        </h2>
        
        <p className="mb-6 text-lg text-gray-600">
          We&apos;re building a next-generation platform for organizing, empowering, and connecting 
          the Afghan diaspora in France.
        </p>
        
        <p className="mb-8 text-gray-500">
          Coming soon to serve the Afghan community.
        </p>

        <div className="flex justify-center space-x-4">
          <div className="rounded-lg bg-emerald-50 px-4 py-2 font-medium text-emerald-600">
            Community
          </div>
          <div className="rounded-lg bg-blue-50 px-4 py-2 font-medium text-blue-600">
            Resources
          </div>
          <div className="rounded-lg bg-amber-50 px-4 py-2 font-medium text-amber-600">
            Support
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} afghans.fr — Building bridges for the Afghan diaspora in France
      </p>
    </div>
  );
}

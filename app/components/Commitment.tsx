"use client";

export default function StatsCommitment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left side: stats */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold">300+</h3>
              <p className="text-gray-600 mt-1">Working publishers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">3+</h3>
              <p className="text-gray-600 mt-1">Bill Impressions</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">100+</h3>
              <p className="text-gray-600 mt-1">Million users</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">300+</h3>
              <p className="text-gray-600 mt-1">Active Publishers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">40+</h3>
              <p className="text-gray-600 mt-1">Advertisers</p>
            </div>
          </div>
        </div>

        {/* Right side: content */}
        <div className="flex flex-col justify-start">
          <h3 className="text-3xl font-semibold">General Performance</h3>
          <p className="text-gray-600 mt-4">
            We are committed to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </p>
          <a
            href="#"
            className="text-blue-600 mt-4 font-medium hover:underline"
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}

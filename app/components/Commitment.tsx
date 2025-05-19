import {
  Users,
  BarChart2,
  MonitorPlay,
  UserCheck,
  Handshake,
  TrendingUp,
} from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Item 1 */}
        <div className="flex items-start space-x-4">
          <Users className="w-8 h-8 text-blue-600 mt-1" />
          <div>
            <p className="text-2xl font-bold">300+</p>
            <p className="text-gray-500">Working publishers</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-start space-x-4">
          <BarChart2 className="w-8 h-8 text-green-600 mt-1" />
          <div>
            <p className="text-2xl font-bold">3+</p>
            <p className="text-gray-500">Bill Impressions</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-start space-x-4">
          <MonitorPlay className="w-8 h-8 text-purple-600 mt-1" />
          <div>
            <p className="text-2xl font-bold">100+</p>
            <p className="text-gray-500">Million users</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-start space-x-4">
          <UserCheck className="w-8 h-8 text-emerald-600 mt-1" />
          <div>
            <p className="text-2xl font-bold">300+</p>
            <p className="text-gray-500">Active Publishers</p>
          </div>
        </div>

        {/* Item 5 */}
        <div className="flex items-start space-x-4">
          <Handshake className="w-8 h-8 text-orange-500 mt-1" />
          <div>
            <p className="text-2xl font-bold">40+</p>
            <p className="text-gray-500">Advertisers</p>
          </div>
        </div>

        {/* Item 6 – General performance */}
        <div className="flex items-start space-x-4">
          <TrendingUp className="w-8 h-8 text-black mt-1" />
          <div>
            <p className="text-2xl font-bold">General Performance</p>
            <p className="text-gray-500 text-sm mt-1">
              We are committed to working with you collaboratively to understand your goals and create a strategy that will achieve them.
            </p>
            <a href="#" className="text-blue-600 text-sm font-medium mt-1 inline-block">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
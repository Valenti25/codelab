import React from 'react';
import { BarChart3, TrendingUp, Users, Settings, Bell } from 'lucide-react';
import Image from 'next/image';

export default function JIBDashboard() {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div>
                <h1 className="text-4xl font-bold">JIB Dashboard</h1>
                <p className="text-lg text-gray-400">Smart Data Dashboard</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xl leading-relaxed text-gray-300">
                Gain full control and clarity over your business with our intuitive dashboards.
              </p>
              <p className="text-lg text-gray-400">Track performance, visualize key metrics, and make better decisions — all in one place.</p>
            </div>

            {/* Feature Icons */}
            <div className="flex space-x-6 pt-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Settings className="h-5 w-5" />
                <span className="text-sm">Customizable</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <BarChart3 className="h-5 w-5" />
                <span className="text-sm">Analytics</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm">Real-time</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Bell className="h-5 w-5" />
                <span className="text-sm">Alerts</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Users className="h-5 w-5" />
                <span className="text-sm">Collaboration</span>
              </div>
            </div>
          </div>

          {/* Right Image (Desktop and Mobile) */}
          <div className="relative flex justify-end">
            <Image
              src="/images/work/theGhostradio1.png"
              alt="Desktop Dashboard Preview"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid items-center gap-12 justify-center lg:grid-cols-2">
        {/* Left - Image Placeholder */}
        <div className="space-y-6">
          <Image
            src="/images/work/theGhostradio1.png"
            alt="Tablet Dashboard Preview 1"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="mb-4 text-3xl font-bold">All-in-One Performance Monitoring Dashboard</h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            Stay ahead with smart insights. Track KPIs, system health, and user behavior through a unified platform. Our dashboard provides
            customizable views, alert automation, and seamless integrations with your tools and workflows.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600/20">
                <TrendingUp className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Real-time Analytics</h3>
                <p className="text-sm text-gray-400">Monitor your business metrics as they happen</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-purple-600/20">
                <Settings className="h-4 w-4 text-purple-400" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Customizable Views</h3>
                <p className="text-sm text-gray-400">Tailor dashboards to your specific needs</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-600/20">
                <Bell className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Smart Alerts</h3>
                <p className="text-sm text-gray-400">Get notified when metrics exceed thresholds</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-600/20">
                <Users className="h-4 w-4 text-orange-400" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Team Collaboration</h3>
                <p className="text-sm text-gray-400">Share insights and work together seamlessly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
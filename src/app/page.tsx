'use client';

import Link from 'next/link';
import { Heart, Cake } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="w-full max-w-4xl px-6">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Hi choti, 👋
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Which one of the messages is more likely to satisfy Dora&apos;s anger? 😁
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Sorry Card */}
          <Link href="/sorry" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-rose-600" />
                </div>
                
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    I&apos;m Sorry
                  </h2>
                  <p className="text-gray-600">
                    A heartfelt apology message
                  </p>
                </div>

                <div className="w-full pt-4">
                  <div className="px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg text-center font-medium group-hover:from-rose-700 group-hover:to-pink-700 transition-all duration-300">
                    Visit
                  </div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
            </div>
          </Link>

          {/* Birthday Thanks Card */}
          <Link href="/bdaythanks" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cake className="w-10 h-10 text-purple-600" />
                </div>
                
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Birthday Thanks
                  </h2>
                  <p className="text-gray-600">
                    A special birthday message
                  </p>
                </div>

                <div className="w-full pt-4">
                  <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-center font-medium group-hover:from-purple-700 group-hover:to-indigo-700 transition-all duration-300">
                    Visit
                  </div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-200/30 to-indigo-200/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
            </div>
          </Link>
        </div>

        {/* Footer text */}
        <div className="text-center mt-12 fade-in">
          <p className="text-gray-500 text-sm">
            Made with love 💝
          </p>
        </div>
      </div>
    </div>
  );
}

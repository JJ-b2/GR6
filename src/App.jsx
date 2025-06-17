import React from 'react';

export default function GlowRoadLandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans">
      <header className="text-center py-12 px-4">
        <h1 className="text-5xl font-bold text-green-400 mb-2">GlowRoad</h1>
        <p className="text-lg text-gray-300">The Future of Night Visibility</p>
      </header>

      <section className="grid md:grid-cols-2 gap-10 px-6 md:px-20 py-10">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-green-300">Why GlowRoad?</h2>
          <p className="text-gray-300">
            Our innovative fluorescent road markings enhance visibility at night and in low-light conditions,
            ensuring safety for drivers and pedestrians. Designed for durability and powered by cutting-edge
            photoluminescent technology.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Eco-friendly, non-toxic materials</li>
            <li>High reflectivity and night glow</li>
            <li>Quick application and long lifespan</li>
            <li>Government and global infrastructure ready</li>
          </ul>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl shadow-lg">
            Get a Quote
          </button>
        </div>

        <div>
          <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-300">Contact Us</h3>
            <form className="space-y-4" action="https://formspree.io/f/mnnvzapd" method="POST">
              <input name="name" placeholder="Your Name" className="w-full bg-gray-800 text-white border border-gray-600 p-2 rounded" required />
              <input name="email" type="email" placeholder="Email Address" className="w-full bg-gray-800 text-white border border-gray-600 p-2 rounded" required />
              <textarea name="message" placeholder="Message" className="w-full bg-gray-800 text-white border border-gray-600 p-2 rounded" rows="4" required></textarea>
              <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-400 py-6 border-t border-gray-700 mt-10">
        &copy; {new Date().getFullYear()} GlowRoad. All rights reserved.
      </footer>
    </main>
  );
}

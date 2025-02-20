'use client'
import Image from "next/image";

export default function IotProcess() {
  return (
    <>
      <section className="bg-gray-950 text-white py-16 px-8">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">Why Choose Us for IoT Development?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border border-blue-800 rounded-lg mt-10">
          {/* Left Side - Scrollable List */}
          <div className="bg-gradient-to-b from-blue-400 to-blue-800 p-6 rounded-lg h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
            <ul className="space-y-4">
              <li className="text-white text-lg p-2"><span className="ml-2 font-bold">Dedicated Developers</span></li>
              <hr className="opacity-50" />
              <li className="text-gray-200 text-lg p-2"><span className="ml-2">IoT Expertise and Experience</span></li>
              <hr className="opacity-50" />
              <li className="text-gray-200 text-lg p-2"><span className="ml-2">Comprehensive Solutions</span></li>
              <hr className="opacity-50" />
              <li className="text-gray-200 text-lg p-2"><span className="ml-2">Customization and Tailoring</span></li>
              <hr className="opacity-50" />
              <li className="text-gray-200 text-lg p-2"><span className="ml-2">Agile Development Approach</span></li>
              <hr className="opacity-50" />
              <li className="text-gray-200 text-lg p-2"><span className="ml-2">Cost-Effectiveness and ROI Focus</span></li>
              <hr className="opacity-50" />
              <li className="text-gray-200 text-lg p-2"><span className="ml-2">Collaborative Partnership</span></li>
              <hr className="opacity-50" />
            </ul>
          </div>

          {/* Right Side - Content */}
          <div className="bg-gray-950 p-8 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className=" p-3 rounded-full">
                <Image src="/images/iot/iot.png" alt="iot" width={30} height={30}/>
              </div>
              <h2 className="text-2xl font-bold">IoT Development</h2>
            </div>
            <p className="mt-4 text-gray-200">
              Looking for the best IoT development services provider? </p>
            <p className="text-gray-400 mt-2 font-light">There&apos;s no better option than <span className="text-blue-500">TECHONSY</span>. We always embrace innovation with precision and deliver the best business outcomes. Our experts craft tailored IoT solutions that enhance efficiency, connectivity, and insights for your business. We prioritize security, scalability, and seamless integration, ensuring a future-ready IoT ecosystem. Partner with us to unlock the potential of IoT and stay ahead in a rapidly evolving technological landscape.

              We add the following features that make it easy for turning your dream project into a reality.
            </p>
          </div>
        </div>

      </section>
    </>
  );
}
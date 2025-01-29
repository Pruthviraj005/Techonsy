import { Code, CloudIcon, Shield, Globe } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative z-10 overflow-hidden bg-gray-900 pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                Transforming Business Through
                <span className="text-blue-500"> Technology Solutions</span>
              </h1>
              <p className="mb-12 text-lg leading-relaxed text-gray-300 sm:text-xl">
                TECHONSY delivers cutting-edge IT solutions that empower businesses to thrive in the digital age. From custom software development to cloud infrastructure, we're your trusted technology partner.
              </p>
              
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/contact"
                  className="rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-700 w-full sm:w-auto"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="rounded-lg border border-gray-600 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-gray-800 w-full sm:w-auto"
                >
                  Our Services
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                    <Code className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Custom Development</h3>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                    <CloudIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Cloud Solutions</h3>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                    <Shield className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Cybersecurity</h3>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                    <Globe className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Digital Transformation</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient Effects */}
      <div className="absolute top-0 right-0 -z-10 opacity-30">
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-[120px]" />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-30">
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-[120px]" />
      </div>
    </section>
  );
};

export default Hero;
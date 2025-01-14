import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import SnapshotPage from "./Snapshot/page";

export default function Home() {
  return (
    <>
     <Navbar/>
      <section className="bg-gradient-to-br from-blue-900 via-purple-700 to-indigo-900 text-white">
          <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 lg:py-24">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Welcome to <span className="text-blue-400">Techonsy</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Your Partner in Digital Transformation and Growth
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href="#services"
                  className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg transition-all"
                >
                  Learn more
                </a>  
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/techonsy_img.jpg"
                alt="Techonsy Hero Illustration"
                className="w-80 lg:w-[30rem] "
              />
            </div>
          </div>
        </section>
      <SnapshotPage/>
      <Footer/>
      </>
  );
}





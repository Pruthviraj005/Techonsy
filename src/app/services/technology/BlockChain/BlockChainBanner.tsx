'use client'

export default function BlockChainBanner() {
  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center bg-black">
        {/* Background Video/Image */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/background.mp4" // Replace with your video file
          autoPlay
          loop
          muted
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Content */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            Blockchain <br /> Development Services
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Tap into the blockchain universe with our world-class custom decentralized solutions
          </p>
          <button className="mt-6 px-6 py-3 border border-white text-white text-lg font-medium rounded-lg hover:bg-white hover:text-black transition">
            Consult Our Experts →
          </button>
        </div>
      </div>
    </>
  )
}
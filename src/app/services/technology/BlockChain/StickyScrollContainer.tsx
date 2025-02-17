'use client' 

export default function StickyScrollContainer() {
  return (
    <section className="bg-gray-950 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border border-blue-800 rounded-lg">
        {/* Left Side - Scrollable List */}
        <div className="bg-gradient-to-b from-blue-400 to-blue-800 p-6 rounded-lg h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
          <ul className="space-y-4">
            <li className="text-white text-lg p-2">01. <span className="ml-2 font-bold">Blockchain Consulting and Strategy</span></li>
            <hr className="opacity-50" />
            <li className="text-gray-200 text-lg p-2">02. <span className="ml-2">dApps Development</span></li>
            <hr className="opacity-50" />
            <li className="text-gray-200 text-lg p-2">03. <span className="ml-2">Cryptocurrency Wallet and Exchange Development</span></li>
            <hr className="opacity-50" />
            <li className="text-gray-200 text-lg p-2">04. <span className="ml-2">Layer-2 Development</span></li>
            <hr className="opacity-50" />
            <li className="text-gray-200 text-lg p-2">05. <span className="ml-2">Smart Contract Audit and Development</span></li>
            <hr className="opacity-50" />
            <li className="text-gray-200 text-lg p-2">06. <span className="ml-2">Tokenomics and ICO Development</span></li>
            <hr className="opacity-50" />
            <li className="text-gray-200 text-lg p-2">07. <span className="ml-2">Blockchain Security and Compliance</span></li>
            <hr className="opacity-50" />
            <li className="text-gray-200 text-lg p-2">08. <span className="ml-2">NFT Marketplace Development</span></li>
            <hr className="opacity-50" />
            <li className="text-gray-200 text-lg p-2">09. <span>Decentralized Finance (DeFi) Solutions</span></li>
          </ul>
        </div>

        {/* Right Side - Content */}
        <div className="bg-gray-950 p-8 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-b from-blue-400 to-blue-800 p-3 rounded-lg">
              <span className="text-white text-2xl">&lt;/&gt;</span>
            </div>
            <h2 className="text-2xl font-bold">Blockchain Consulting Services</h2>
          </div>
          <p className="mt-4 text-gray-400">
            As a leading <span className="font-bold text-white">custom blockchain application development</span> and software development service company,
            we offer expert blockchain consulting and strategic guidance to launch a proficient blockchain solution.
            Whether you are starting from scratch or revamping the existing system, our highly skilled solutions
            are robust, secure, and aligned with accelerating your business objectives.
          </p>
        </div>
      </div>
     
    </section>
  );
}
"use client";
'';
import React from 'react';
import { motion } from 'framer-motion';

const TechnologiesSection = () => {
    const fadeIn = {
      hidden : { opacity : 0, y : 20 },
      visible : { opacity : 1, y : 0, transition : { duration : .6 } }
    };

    const staggerContainer = {
      hidden : {},
      visible : {
          transition : {
              staggerChildren : .2
          }
      }
    };

    const technologies = [
      "Ethereum", 
      "Solana", 
      "Polygon", 
      "Binance Smart Chain", 
      "IPFS", 
      "React", 
      "Node.js", 
      "NextJS", 
      "Solidity", 
      "Rust", 
      "Web3.js", 
      "Hardhat"
    ];

    return (
      <motion.section 
          className='py-[80px] bg-gray900/50'
          initial='hidden'
          whileInView='visible'
          viewport={{ once : true, amount : .3 }}
          variants={staggerContainer}
      >
          <div className='container mx-auto px-[24px]'>
              <motion.div 
                  className='text-center mb-[64px]'
                  variants={fadeIn}
              >
                  <h2 className='text-[36px] md:text-[40px] font-bold mb-[16px]'>Technologies We Use</h2>
                  <p className='text-xl text-gray400 max-w-[600px] mx-auto'>
                      Cutting-edge tech stack for building powerful NFT marketplaces.
                  </p>
              </motion.div>

              {/* Technology Cards */}
              <div className='grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-x-[16px] gap-y-[32px]'>
                  {technologies.map((tech) => (
                      <motion.div
                          key={tech}
                          variants={fadeIn}
                          whileHover={{ scale : 1.05 }} // Scale effect on hover
                          transition={{ duration : .3 }}
                          className='bg-gradient-to-br from-gray800 to-gray900 p-[16px] rounded-xl border border-gray700 flex items-center justify-center text-center'
                      >
                          <span className='font-medium'>{tech}</span>
                      </motion.div>  
                  ))}
              </div>  
          </div>  
      </motion.section>  
   );  
};  

export default TechnologiesSection;  

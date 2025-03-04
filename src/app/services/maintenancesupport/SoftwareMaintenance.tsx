"use client";
''
import React from 'react'
import { offeringServices } from './data'
import { btn } from '../consulting-services/data'

function SoftwareMaintenance() {
  return (
    <>

      <div>
        <section className="bg-black border-y-[0.5px] border-slate-600 w-[100vw] mx-auto flex justify-center lg:absolute left-0 my-[10%]  ">
          <div className="w-[1000px]">
            <div>
              <title>Software Maintenance</title>
            </div>
            <div className="container mx-auto px-6 py-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Software Maintenance and Support Service – Our Offerings
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left py-10">
                {offeringServices.map((item, index) => (
                  <div key={index} className="space-y-2  border-b-[0.5px] border-[0.5px] p-6 border-blue-700 border-opacity-50 rounded-2xl shadow-md shadow-blue-500/50">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default SoftwareMaintenance

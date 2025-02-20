import Head from "next/head";
import { features, maintenanceData, approachData, maintenanceServices,offeringServices } from "./data";

export default function Home() {

  return (
    <div className="w-screen flex flex-col justify-center bg-gray-900 relative">
        <div className="= text-white max-w-[1000px] mx-auto ">
        <Head>
            <title>Software Maintenance & Support</title>
            <meta name="description" content="Stay ahead with expert software maintenance services." />
        </Head>

      

        {/* top  */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh]  py-10" >
            <div className="h-full  bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 absolute w-[100vw] border-b-[1px] border-b-cyan-600"></div>
            <div className="absolute   bg-black w-[100vw] mx-auto bg-opacity-70 h-full  "></div>
            <div className="relative z-10 px-6  flex flex-col gap-8 mt-16">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 ">Software Maintenance and Support</h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        Stay light years ahead with simplistic software maintenance services
                    </p>
                </div>
                <p className="text-md md:text-lg  text-gray-400">
                    Enhance your business productivity by infusing flexibility, scalability, and rapid realization of ROI with intuitive and bespoke software application maintenance services.
                </p>
                <button className=" mt-6 w-[85%] bg-blue-600 px-2 py-2 text-lg font-medium rounded-md hover:bg-blue-900 max-w-[450px] mx-auto transition-all transform hover:scale-105 duration-300 ease-in-out">
                    Consult Software Maintenance Experts →
                </button>
            </div>
        </section>


        {/* Services  */}
        <section className="pb-14 px-6 text-center  mt-10">
            <h2 className="text-4xl font-bold text-white mb-10 leading-[60px]">
                Our Software <span className="text-cyan-500"> Maintenance</span> and <span className="text-cyan-500">Support Services</span>
            </h2>
            <div className="mb-16">
                Build stable applications that run with 100% efficiency while enhancing the functionality and customer acceptance of your software with omniscient software app maintenance
            </div>
            <section className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center space-y-4 p-6 rounded-lg shadow-lg border border-white/30 bg-slate-900 transition-transform transform hover:scale-105 hover:shadow-cyan-500/50 duration-300 ease-in-out overflow-hidden"
                        >
                            {feature.icon}
                            <h3 className="text-xl font-bold">{feature.title}</h3>
                            <p className="text-gray-500">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </section>
 
        <section className="bg-black border-y-[0.5px]  border-slate-600 w-[100vw] mx-auto flex justify-center lg:absolute left-0 ">
            <div className="w-[1000px] ">
            <div>
                <title>Software Maintenance</title>
            </div>
            <div className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Acquire Curated Expertise with a Leading Software Maintenance Company
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                    Choose the maintenance strategy that fits your business requirements best and effectively
                    resolve issues and bugs while bridging gaps in your IT ecosystem; facilitate massive yet sustainable
                    growth for your enterprise app.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left py-10 ">
                    {maintenanceData.map((item, index) => (
                        <div key={index} className="space-y-2  border-b-[0.5px] border-[0.5px] p-6 border-purple-700 border-opacity-50 rounded-2xl shadow-md shadow-purple-500/50  ">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>

        <section className="my-8 lg:mt-[90%]">
            <Head>
                <title>Software Maintenance Approach</title>
            </Head>
            <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
                <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Software Application Maintenance – Our Approach
                </h1>
                <p className="text-gray-400">
                    We base our software solutions and maintenance measures according to
                    challenges specific to your business niche and tailor our solutions accordingly.
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[10%] max-w-5xl mx-auto">
                {approachData.map((item, index) => (
                    <div
                    key={index}
                    className="flex items-start space-x-4 bg-gray-800 p-5 rounded-lg shadow-lg"
                    >
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
        

        {/* Why Choose Us */}
        {/* <section className="py-16 px-6 bg-gray-800 text-center ">
            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <p className="text-gray-300 mt-4">We provide tailored software maintenance solutions that drive success.</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
                { title: "24/7 Support", desc: "Our team is available round the clock." },
                { title: "Expert Engineers", desc: "Industry-leading professionals to maintain your software." },
                { title: "Cost-Effective", desc: "Flexible plans to suit your budget." },
            ].map(({ title, desc }) => (
                <div key={title} className="p-6 bg-gray-700 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-400 mt-2">{desc}</p>
                </div>
            ))}
            </div>
        </section> */}

        <section className="relative min-h-screen mt-[10%]  ">
            
            <div className="absolute inset-0 w-slg opacity-30  bg-gradient-to-br from-[#182a44] to-[#084e7a] blur-[100px]  animate-rotate rounded-full  z-0"></div>

            <div className="relative z-10 text-white  px-6">
                <div className="text-center max-w-4xl mx-auto mb-12 flex flex-col gap-14">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
                        Software Product Maintenance for Seamless User Journeys
                    </h1>
                    <p className="text-slate-400 ">
                        Integrate highly effective software product maintenance services to revitalize outdated software and infuse relevant emerging technology by following industry-grade authentic measures.
                    </p>
                </div>

                {/* Cards  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto pt-10">
                    {maintenanceServices.map((service, index) => (
                        <div
                            key={index}
                            className="transperant bg-blur-[300px] shadow-lg rounded-xl p-6 border-[0.5px] border-blue-400 border-opacity-50 w-full text-sm font-medium transition-all duration-700 hover:scale-105"
                        >
                            <h3 className="text-xl font-semibold text-slate-300">{service.title}</h3>
                            <p className="text-slate-500 mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="bg-black border-y-[0.5px] border-slate-600 w-[100vw] mx-auto flex justify-center lg:absolute left-0 my-[10%]  ">
            <div className="w-[1000px]">
                <div>
                    <title>Software Maintenance</title>
                </div>
                <div className="container mx-auto px-6 py-12 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Software Maintenance and Support Service – Our Offerings
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                        As a leading Software Maintenance and Support Company, we provide expert support 
                        and a wide array of maintenance services for your enterprise product.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left py-10">
                        {offeringServices.map((item, index) => (
                            <div key={index} className="space-y-2  border-b-[0.5px] border-[0.5px] p-6 border-purple-700 border-opacity-50 rounded-2xl shadow-md shadow-purple-500/50">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>


        <section className="py-[10%] px-6 text-center lg:mt-[90%]  ">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-gray-300 mt-4 text-[150%] py-6">Leverage your business productivity with innovative software maintenance services</p>
            <button className="mt-6 bg-red-500 px-6 py-3 text-lg font-medium rounded-md hover:bg-red-900 max-w-[450px] mx-auto transition-all transform hover:scale-105 duration-300 ease-in-out">
            let's get productivity →
            </button>
        </section>

    </div>
    </div>
  );
}

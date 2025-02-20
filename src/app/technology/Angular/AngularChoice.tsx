'use client'

import Image from "next/image";
import InfoCard from "./InfoCards";

export default function AngularChoice() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-900 to-black text-white py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center">
        Why is AngularJS considered the best choice for Web App Development?
      </h1>
      <h2 className="text-lg sm:text-xl mb-8 font-light text-center">
        Here&apos;s why Angular is the best choice for web app development
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <InfoCard
          title="Easy-to-use"
          description="Angular development incorporates a component-based architecture that enables the management of complex applications with ease."
          icon={<Image src="/images/angular/easy-to-use.png" alt="mvc" width={80} height={80} />}
        />
        <InfoCard
          title="Performance and Speed"
          description="The features of Angular Tools are incredible, resulting in enhanced speed and reloading of web pages."
          icon={<Image src="/images/angular/performance.png" alt="mvc" width={80} height={80} />}
        />
        <InfoCard
          title="Dynamic Development"
          description="Dynamic Development in AngularJS extends beyond just reusable components."
          icon={<Image src="/images/angular/dynamic.png" alt="mvc" width={80} height={80} />}
        />
        <InfoCard
          title="Easy Testing"
          description="You can easily conduct automated testing in Angular applications without complying with any order."
          icon={<Image src="/images/angular/easy-testing.png" alt="mvc" width={80} height={80} />}
        />
        <InfoCard
          title="Community Backup"
          description="At Ahex, we offer hassle-free services so you don&apos;t have to get bothered with backup. We have a large community of AngularJS developers who&apos;re inclined towards providing the best services!"
          icon={<Image src="/images/angular/community.png" alt="mvc" width={80} height={80} />}
        />
        <InfoCard
          title="MVC Working Pattern"
          description="MVC extensively separates the user interface from application logic."
          icon={<Image src="/images/angular/mvc.png" alt="mvc" width={80} height={80} />}
        />
      </div>
    </div>
  );
}

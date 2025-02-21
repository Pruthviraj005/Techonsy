'use client'

import Image from "next/image";
import InfoCard from "./InfoCards";

export default function AngularBenefits() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-black to-blue-900 text-white py-10 mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center">Discover the Benefits of Angular</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-10">
        <InfoCard
          title="Directives"
          description="Directives are the powerful component of AngularJS that empowers AngularJS developers to develop HTML-based applications, facilitating rapid development."
          icon={<Image src="/images/angular/directives.png" alt="directives" width={70} height={70} />}
        />
        <InfoCard
          title="Reusable Components"
          description="Reusable components stand as the most essential feature for Angular Developers, enabling them to conceal complex CSS and DOM structures while effectively directing attention towards application functionality."
          icon={<Image src="/images/angular/reusable-component.png" alt="reusable components" width={80} height={80} />}
        />
        <InfoCard
          title="Localization"
          description="The developers can easily build the application from scratch with Angular's local filters and directives. Undoubtedly, the effectiveness bar gets raised!"
          icon={<Image src="/images/angular/localization.png" alt="localization" width={80} height={80} />}
        />
        <InfoCard
          title="Validating Forms"
          description="Client-side form validation significantly enhances the user experience in Angular Development. Instead of writing code, developers can set the validation criteria with Angular, leading to accelerated application development."
          icon={<Image src="/images/angular/validating-forms.png" alt="validating forms" width={80} height={80} />}
        />
        <InfoCard
          title="Server Communication"
          description="The server communication uses third-party libraries that can efficiently manage the obstructed data to take leverage of XHR and built-in services."
          icon={<Image src="/images/angular/server-communication.png" alt="server communication" width={80} height={80} />}
        />
        <InfoCard
          title="Injections"
          description="The dependency injections in Angular successfully enable the declarative explanation of AngularJS applications and abate the need for harsh methods."
          icon={<Image src="/images/angular/injections.png" alt="injections" width={80} height={80} />}
        />
      </div>
    </div>
  );
}

import { useRouter } from "next/router";
import MobileApp from "@/components/Services/development/MobileApp";

// import WebDevelopment from "@/components/Services/development/WebDevelopment";
// import CrossPlatform from "@/components/Services/development/CrossPlatform";
// Import other service components...

export default function ServicePage() {
  const router = useRouter();
  const { service } = router.query; // Get the dynamic part of the URL

  // Map service names to components
  const serviceComponents: Record<string, JSX.Element> = {
    MobileApp: <MobileApp />,
    // WebDevelopment: <WebDevelopment />,
    // CrossPlatform: <CrossPlatform />
    // Add more services here...
  };

  return serviceComponents[service as string] || <p>Service Not Found</p>;
}

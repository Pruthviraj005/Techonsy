"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
    const [user, setUser] = useState<string>("");

    useEffect(() => {
      const fetchUser = () => {
          // Get cookie manually instead of using getCookie()
          const allCookies = document.cookie;
          console.log("All Cookies:", allCookies);
  
          // Extract "user" value
          const match = allCookies.match(/user=([^;]+)/);
          const storedUser = match ? match[1] : "";
          
          console.log("Fetched User:", storedUser); // Debugging output
          setUser(storedUser);
      };
  
      fetchUser();
  }, []);
  

    const handleSetCookie = () => {
        document.cookie = "user=TechonsyUserTESTING; path=/; max-age=86400"; // 24 hours
        console.log("Document Cookie Set:", document.cookie);
        setUser("TechonsyUser");
    };

    const handleDeleteCookie = () => {
        document.cookie = "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        setUser("");
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl">Techonsy Home Page</h1>
            <p>Stored User: {user || "No User Found"}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={handleSetCookie}>
                Set Cookie
            </button>
            <button className="bg-red-500 text-white px-4 py-2 mt-2 ml-2" onClick={handleDeleteCookie}>
                Delete Cookie
            </button>
        </div>
    );
}

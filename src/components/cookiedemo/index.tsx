'use client';

import { setCookie, getCookie, removeCookie } from '../../util/cookieUtils';
import { useState, useEffect } from 'react';

export default function CookieDemo() {
    const [user, setUser] = useState('');

    // Fetch cookie on component mount
    useEffect(() => {
        const storedUser = getCookie('user');
        if (storedUser) setUser(storedUser);
    }, []);

    const handleSetCookie = () => {
        setCookie('user', 'JohnDoe', 5 / 86400);
        setUser('JohnDoe');
    };

    const handleRemoveCookie = () => {
        removeCookie('user');
        setUser('');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md text-center">
                <h2 className="text-xl font-semibold text-gray-700">Cookie Demo</h2>
                <p className="mt-4 text-gray-600">Current User: <span className="font-bold text-blue-500">{user || 'No Cookie Set'}</span></p>

                <div className="mt-6 space-x-4">
                    <button
                        onClick={handleSetCookie}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
                    >
                        Set Cookie
                    </button>
                    <button
                        onClick={handleRemoveCookie}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all"
                    >
                        Remove Cookie
                    </button>
                </div>
            </div>
        </div>
    );
}

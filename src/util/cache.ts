export const setCache = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getCache = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

export const clearCache = (key: string) => {
    localStorage.removeItem(key);
};

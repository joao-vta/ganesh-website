import cacheData from "memory-cache";

export async function fetchWithCache(url, options) {
    const value = cacheData.get(url);
    if (value) {
        return value;
    } else {
        const hours = 1;
        const res = await fetch(url, options);
        const data = await res.json();

        //using minutes for sake of testing
        //cacheData.put(url, data, hours * 1000 * 60 * 60);
        cacheData.put(url, data, hours * 1000 * 60);
        return data;
    }
}
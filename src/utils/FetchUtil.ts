export const get = async <T>(url: string): Promise<T> => {
    try {
        return (await fetch(url)).json();
    } catch (e) {
        console.error(e);
        throw e;
    }
};

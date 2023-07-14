
export const saveToLocalStorage = (key, value) => {
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            // Code that uses localStorage
            window.localStorage?.setItem(key, JSON.stringify(value));
        }

    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
};

export const getFromLocalStorage = (key) => {
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            // Code that uses localStorage
            const item = window.localStorage?.getItem(key);
            return item ? JSON.parse(item) : null;
        }

    } catch (error) {
        console.error('Error retrieving from localStorage:', error);
        return null;
    }
};

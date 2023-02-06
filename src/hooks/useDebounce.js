import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [debounceValue, serDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => serDebounceValue(value), delay);
        return () => clearTimeout(handler);
    }, [value]);

    return debounceValue;
}

export default useDebounce;

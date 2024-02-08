import { useEffect } from 'react';

export function useBodyScrollLock(condition) {
    useEffect(() => {
        if (condition) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        // Cleanup function
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [condition]);
}
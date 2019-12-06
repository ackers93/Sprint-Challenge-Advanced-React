import { useEffect, useState } from 'react';
// import useLocalStorage from './useLocalStorage'

const useDarkMode = (initialValue) => {
    const [inputValue, setInputValue] = useL(initialValue);
    useEffect(() => {
        const body = window.document.body;
        return inputValue ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    }, [inputValue])
    return [inputValue, setInputValue];
}

export default useDarkMode;
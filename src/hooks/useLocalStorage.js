import { useState } from "React";

export const useLocalStorage = (key, initialValues) =>
{
    // set and update localStorage and also retrieves that value if the user refreshes or closes the window
    const [values, setValues] =useState(() =>
    {
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : localStorage.setItem(key, JSON.stringify(initialValues));
    });

    const setStoredValues = (values) =>
    {
        localStorage.setItem(key, JSON.stringify(values));
        setValues(values);
    };

    return [values, setStoredValues];
};

export default useLocalStorage;
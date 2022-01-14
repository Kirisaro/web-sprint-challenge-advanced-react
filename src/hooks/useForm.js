// write your custom hook here to control your checkout form
import React, { useState } from "react";

const useForm = (init) => {
    const [values, setValues] = useState(init)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    return [values, showSuccessMessage, handleChanges, handleSubmit]
}

export default useForm;
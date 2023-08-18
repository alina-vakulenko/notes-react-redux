import { useState, ChangeEvent } from "react";

const defaultNoteData = {
    name: "",
    category: "Task",
    content: "",
};

export const useNoteForm = (currentNote = defaultNoteData) => {
    const [formData, setFormData] = useState(currentNote);
    const [errors, setErrors] = useState<string[]>([]);

    const validateFormData = () => {
        if (formData.name && formData.category && formData.content) {
            setErrors([]);
            return {
                name: formData.name,
                category: formData.category,
                content: formData.content,
            };
        }

        const errors = [];
        if (!formData.name) {
            errors.push("Name should not be empty");
        }
        if (!formData.category) {
            errors.push("Category missed");
        }
        if (!formData.content) {
            errors.push("Content should not be empty");
        }
        setErrors(errors);
        return false;
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const resetNoteForm = () => {
        setFormData(defaultNoteData);
    };

    return {
        errors,
        formData,
        validateFormData,
        handleChange,
        resetNoteForm,
    };
};

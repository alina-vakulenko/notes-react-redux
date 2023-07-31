import { useState, ChangeEvent } from "react";
import { Note } from "../pages/types";

export const useNoteForm = (dataToEdit: Note | null) => {
    const emptyState = {
        name: "",
        category: "Task",
        content: "",
    };
    const [formData, setFormData] = useState(dataToEdit || emptyState);
    const [errors, setErrors] = useState<string[]>([]);

    const validateFormData = () => {
        if (formData.name && formData.category) {
            setErrors([]);
            return true;
        }
        const errors = [];
        if (!formData.name) {
            errors.push("Name should not be empty");
        }
        if (!formData.category) {
            errors.push("Category missed");
        }
        setErrors(errors);
        return false;
    };

    const onChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const resetNoteForm = () => {
        setFormData(emptyState);
    };

    return {
        formData,
        resetNoteForm,
        errors,
        validateFormData,
        onChange,
    };
};

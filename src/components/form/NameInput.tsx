import { ChangeEvent } from "react";

type NameInputProps = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const NameInput = ({ value, onChange }: NameInputProps) => {
    return (
        <div className="mb-2">
            <label htmlFor="name" className="form-label">
                Name
            </label>
            <input
                className="form-control"
                type="text"
                name="name"
                value={value}
                onChange={onChange}
                autoFocus
            />
        </div>
    );
};

export default NameInput;

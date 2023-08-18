import { ChangeEvent } from "react";

type NameInputProps = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const NameInput = ({ value, onChange }: NameInputProps) => {
    return (
        <div>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={value}
                onChange={onChange}
                autoFocus
            />
        </div>
    );
};

export default NameInput;

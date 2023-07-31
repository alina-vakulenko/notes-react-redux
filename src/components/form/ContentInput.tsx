import { ChangeEvent } from "react";

type ContentInputProps = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const ContentBlock = ({ value, onChange }: ContentInputProps) => {
    return (
        <div className="mb-2">
            <label htmlFor="content">Content</label>
            <textarea
                name="content"
                className="form-control"
                value={value}
                onChange={onChange}
            ></textarea>
        </div>
    );
};

export default ContentBlock;

import { ChangeEvent } from "react";

type ContentInputProps = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const ContentBlock = ({ value, onChange }: ContentInputProps) => {
    return (
        <div>
            <label htmlFor="content">Content</label>
            <textarea
                id="content"
                name="content"
                value={value}
                onChange={onChange}
            ></textarea>
        </div>
    );
};

export default ContentBlock;

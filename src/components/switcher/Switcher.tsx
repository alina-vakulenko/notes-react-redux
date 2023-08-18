import { ChangeEvent } from "react";

type SwitcherProps = {
    label: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Switcher = ({ checked, label, onChange }: SwitcherProps) => {
    return (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                id="switch-archive-show"
                name="switch-archive-show"
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor="switch-archive-show">{label}</label>
        </div>
    );
};

export default Switcher;

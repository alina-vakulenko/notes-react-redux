import { ChangeEvent } from "react";

type SwitcherProps = {
    label: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Switcher = ({ checked, label, onChange }: SwitcherProps) => {
    return (
        <div className="form-check form-switch ms-auto mt-2">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switch-archive-show"
                checked={checked}
                onChange={onChange}
            />
            <label className="form-check-label" htmlFor="switch-archive-show">
                {label}
            </label>
        </div>
    );
};

export default Switcher;

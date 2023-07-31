import { ChangeEvent } from "react";

type CategoryInputProps = {
    categories: string[];
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const CategoryChoice = ({
    categories,
    value,
    onChange,
}: CategoryInputProps) => {
    return (
        <fieldset className="row mb-2">
            <legend className="col-form-label col-sm-3 pt-0">Category</legend>
            <div className="col-sm-9">
                {categories.map((category) => (
                    <div className="form-check" key={category}>
                        <input
                            type="radio"
                            name="category"
                            className="form-check-input"
                            id={`category-${category}`}
                            value={category}
                            checked={value === category}
                            onChange={onChange}
                        ></input>
                        <label
                            className="form-check-label"
                            htmlFor={`category-${category}`}
                        >
                            {category}
                        </label>
                    </div>
                ))}
            </div>
        </fieldset>
    );
};

export default CategoryChoice;

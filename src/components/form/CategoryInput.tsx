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
        <fieldset>
            <legend>Category</legend>
            <div>
                {categories.map((category) => (
                    <div key={category}>
                        <input
                            type="radio"
                            id={`categ  ory-${category}`}
                            name="category"
                            value={category}
                            onChange={onChange}
                            checked={value === category}
                        ></input>
                        <label htmlFor={`category-${category}`}>
                            {category}
                        </label>
                    </div>
                ))}
            </div>
        </fieldset>
    );
};

export default CategoryChoice;

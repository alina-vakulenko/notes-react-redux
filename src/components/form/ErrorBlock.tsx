import { BsFillExclamationCircleFill } from "react-icons/bs";

type ErrorBlockProps = { errors: string[] };

const ErrorBlock = ({ errors }: ErrorBlockProps) => {
    return (
        <ul className="bg-red-50 text-red-700 mb-3 p-2 text-bold text-sm rounded-md">
            {errors.map((error, index) => (
                <li key={index} className="flex items-center font-semibold">
                    <span className="mr-1">
                        <BsFillExclamationCircleFill />
                    </span>
                    {error}
                </li>
            ))}
        </ul>
    );
};

export default ErrorBlock;

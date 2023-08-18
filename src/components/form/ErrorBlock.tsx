type ErrorBlockProps = { errors: string[] };

const ErrorBlock = ({ errors }: ErrorBlockProps) => {
    return (
        <ul className="bg-red-50 text-red-700 mb-3 p-1 text-bold text-sm rounded-sm">
            {errors.map((error, index) => (
                <li key={index} className="before:content-['x'] before:pr-2">
                    {error}
                </li>
            ))}
        </ul>
    );
};

export default ErrorBlock;

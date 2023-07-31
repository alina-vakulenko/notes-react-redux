import styles from "../../pages/form-modal/NoteFormModal.module.css";

type ErrorBlockProps = { errors: string[] };

const ErrorBlock = ({ errors }: ErrorBlockProps) => {
    return (
        <ul className={styles["form-errors"]}>
            {errors.map((error, index) => (
                <li key={index}>{error}</li>
            ))}
        </ul>
    );
};

export default ErrorBlock;

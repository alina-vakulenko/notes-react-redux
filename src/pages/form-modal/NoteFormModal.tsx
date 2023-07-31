import { MouseEvent, useRef, useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { noteAdded, noteEdited } from "../../redux/notes/notesSlice";
import { useNoteForm } from "../../hooks/useNoteForm";
import { CategoryType, Note } from "../types";
import NameInput from "../../components/form/NameInput";
import CategoryInput from "../../components/form/CategoryInput";
import ContentInput from "../../components/form/ContentInput";
import ErrorBlock from "../../components/form/ErrorBlock";
import styles from "./NoteFormModal.module.css";

interface NoteFormProps {
    editMode: boolean;
    dataToEdit: Note | null;
    clearDataToEdit: () => void;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoteFormModal = ({
    setShow,
    dataToEdit,
    editMode,
    clearDataToEdit,
}: NoteFormProps) => {
    const dispatch = useAppDispatch();
    const modalRef = useRef<HTMLDialogElement>(null);

    const { formData, resetNoteForm, errors, validateFormData, onChange } =
        useNoteForm(dataToEdit);

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current?.showModal();
            document.body.classList.add("modal-open");
        }
    }, []);

    const handleCloseModal = () => {
        modalRef.current?.close();
        setShow(false);
        resetNoteForm();
        clearDataToEdit();
        document.body.classList.remove("modal-open");
    };

    const onClickOutside = (e: MouseEvent) => {
        const dialogDimensions = modalRef.current?.getBoundingClientRect();
        const isClickOutside =
            dialogDimensions &&
            (e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom);

        if (isClickOutside && modalRef.current) {
            handleCloseModal();
        }
    };

    const onSubmit = (e: MouseEvent) => {
        e.preventDefault();
        if (!validateFormData()) return;

        const { name, category, content } = formData;

        if (editMode && dataToEdit) {
            dispatch(noteEdited(dataToEdit.id, name, category, content));
            handleCloseModal();
        } else {
            dispatch(noteAdded(name, category, content));
            handleCloseModal();
        }
    };

    return (
        <dialog
            ref={modalRef}
            onClose={handleCloseModal}
            onCancel={handleCloseModal}
            onClick={onClickOutside}
        >
            <button
                className={styles["btn-close-modal"]}
                aria-label="Close modal"
                onClick={handleCloseModal}
            >
                &times;
            </button>
            <form>
                <NameInput value={formData.name} onChange={onChange} />
                <CategoryInput
                    categories={Object.values(CategoryType)}
                    value={formData.category}
                    onChange={onChange}
                />
                <ContentInput value={formData.content} onChange={onChange} />
                <ErrorBlock errors={errors} />
                <button
                    type="submit"
                    onClick={onSubmit}
                    className="btn btn-dark d-block mx-auto mt-4"
                >
                    Save
                </button>
            </form>
        </dialog>
    );
};

export default NoteFormModal;

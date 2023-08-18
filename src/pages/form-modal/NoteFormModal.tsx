import { MouseEvent } from "react";
import { BsX } from "react-icons/bs";
import { useNoteForm } from "../../hooks/useNoteForm";
import { useDialog } from "../../hooks/useDialog";
import { CategoryType } from "../types";
import NameInput from "../../components/form/NameInput";
import CategoryInput from "../../components/form/CategoryInput";
import ContentInput from "../../components/form/ContentInput";
import ErrorBlock from "../../components/form/ErrorBlock";
import Button from "../../components/button/Button";
import { useTableActions } from "../../hooks/useTableActions";
import { Note } from "../types";

type NoteFormModalProps = {
    selectedNote?: Note;
    clearSelectedNote: () => void;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NoteFormModal = ({
    selectedNote,
    clearSelectedNote,
    setIsModalOpen,
}: NoteFormModalProps) => {
    const { dialogRef, closeDialog, isClickedOutside } = useDialog();
    const { formData, errors, validateFormData, handleChange, resetNoteForm } =
        useNoteForm(selectedNote);
    const { onAdd, onEdit } = useTableActions();

    const onClose = () => {
        if (selectedNote) {
            clearSelectedNote();
        }
        closeDialog();
        setIsModalOpen(false);
    };

    const onSubmit = (e: MouseEvent) => {
        e.preventDefault();

        const validatedFormData = validateFormData();
        if (!validatedFormData) return;

        if (selectedNote) {
            onEdit(selectedNote.id, validatedFormData);
        } else {
            onAdd(validatedFormData);
        }
        resetNoteForm();
        onClose();
    };

    const onClickOutside = (e: MouseEvent) => {
        if (isClickedOutside(e)) {
            onClose();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            onCancel={onClose}
            onClick={onClickOutside}
            className="relative w-[450px] min-h-[350px] border-2 border-slate-700 rounded-lg p-6 backdrop:backdrop-blur-sm backdrop:bg-black-50"
        >
            <div className="absolute top-2 right-2">
                <Button
                    onClick={onClose}
                    shape="circle"
                    size="sm"
                    aria-label="Close modal"
                >
                    <BsX />
                </Button>
            </div>
            <form className="flex flex-col gap-3">
                <NameInput value={formData.name} onChange={handleChange} />
                <CategoryInput
                    categories={Object.values(CategoryType)}
                    value={formData.category}
                    onChange={handleChange}
                />
                <ContentInput
                    value={formData.content}
                    onChange={handleChange}
                />
                {errors.length > 0 && <ErrorBlock errors={errors} />}
            </form>
            <Button onClick={onSubmit} size="lg">
                Save
            </Button>
        </dialog>
    );
};

export default NoteFormModal;

import Dialog from "@/components/modal/Modal";
import NoteForm from "./NoteForm";
import { NoteCreateInput } from "@/redux/notes/types";

interface NoteFormModalProps {
    isOpen: boolean;
    title?: string;
    defaultNoteFormData: NoteCreateInput;
    onSubmit: (data: NoteCreateInput) => void;
    onClose: () => void;
}
const NoteFormModal = ({
    isOpen,
    title,
    onSubmit,
    onClose,
    defaultNoteFormData,
}: NoteFormModalProps) => {
    return (
        <Dialog isOpen={isOpen} title={title} onClose={onClose}>
            <NoteForm defaultData={defaultNoteFormData} onSubmit={onSubmit} />
        </Dialog>
    );
};

export default NoteFormModal;

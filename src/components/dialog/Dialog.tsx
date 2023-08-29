import { useRef, useEffect, MouseEvent, ReactNode } from "react";
import { BsX } from "react-icons/bs";
import Button from "../button/Button";

type ModalProps = {
    show: boolean;
    title?: string;
    handleSubmit: (e: MouseEvent<HTMLButtonElement>) => boolean;
    handleClose: () => void;
    children: ReactNode;
};

const Dialog = ({
    show,
    title,
    handleSubmit,
    handleClose,
    children,
}: ModalProps) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const cancelButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        cancelButtonRef.current?.focus();

        dialogRef.current?.showModal();
        document.body.classList.add("overflow-hidden");
    }, []);

    const closeDialog = () => {
        dialogRef.current?.close();
        document.body.classList.remove("overflow-hidden");
        handleClose();
    };

    const submitDialog = (e: MouseEvent<HTMLButtonElement>) => {
        if (handleSubmit(e)) {
            closeDialog();
        }
    };

    const cancelDialog = () => {
        closeDialog();
    };

    const isClickedOutside = (e: MouseEvent) => {
        const dialogDimensions = dialogRef.current?.getBoundingClientRect();
        if (!dialogDimensions) return;

        const clickedOutside =
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom;

        return clickedOutside;
    };

    const closeDialogOnClickOutside = (e: MouseEvent) => {
        if (isClickedOutside(e)) {
            closeDialog();
        }
    };

    return show ? (
        <dialog
            ref={dialogRef}
            onClose={closeDialog}
            onCancel={cancelDialog}
            onClick={closeDialogOnClickOutside}
            className="flex flex-col border-2 w-[500px] min-h-[350px] bg-slate-100 border-slate-700 rounded-lg backdrop:backdrop-blur-sm backdrop:bg-black-50"
        >
            <header className="bg-slate-700 text-white tracking-wider px-6 py-2 flex align-middle">
                {title && <h1 className="text-lg font-semibold">{title}</h1>}
                <div className="ms-auto">
                    <button
                        className="rounded-full p-2 text-white hover:bg-slate-600 focus:outline-none focus:bg-slate-800 focus:ring-1 focus:ring-white"
                        onClick={closeDialog}
                        type="button"
                        aria-label="Close modal"
                    >
                        <BsX />
                    </button>
                </div>
            </header>
            <div className="flex-1 px-6 py-2 flex items-center justify-center">
                {children}
            </div>
            <div className="flex justify-end gap-3 px-6 py-2">
                <button
                    type="reset"
                    ref={cancelButtonRef}
                    onClick={cancelDialog}
                >
                    Cancel
                </button>
                <Button
                    onClick={(e: MouseEvent<HTMLButtonElement>) =>
                        submitDialog(e)
                    }
                >
                    Submit
                </Button>
            </div>
        </dialog>
    ) : null;
};

export default Dialog;

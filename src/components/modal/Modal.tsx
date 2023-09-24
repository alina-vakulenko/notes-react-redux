import { useRef, useEffect, MouseEvent, ReactNode, useState } from "react";
import { BsX } from "react-icons/bs";
import { Button } from "../ui/button";

type ModalProps = {
    isOpen: boolean;
    children: ReactNode;
    title?: string;
    onClose?: () => void;
};

const Dialog = ({ isOpen, title, onClose, children }: ModalProps) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
                document.body.classList.add("overflow-hidden");
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
        document.body.classList.remove("overflow-hidden");
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape") {
            handleCloseModal();
        }
    };

    const isClickedOutside = (e: MouseEvent) => {
        const dialogDimensions = modalRef.current?.getBoundingClientRect();
        if (!dialogDimensions) return;

        const clickedOutside =
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom;

        return clickedOutside;
    };

    const closeDialogIfClickedOutside = (e: MouseEvent) => {
        if (isClickedOutside(e)) {
            handleCloseModal();
        }
    };

    return (
        <dialog
            ref={modalRef}
            onClose={handleCloseModal}
            onClick={closeDialogIfClickedOutside}
            onKeyDown={handleKeyDown}
            className="flex flex-col border border-border shadow-lg w-2/3 sm:w-[500px] min-h-[350px] bg-background rounded-lg backdrop:backdrop-blur-sm backdrop:bg-black/50 dark:backdrop:bg-white/10"
        >
            <header className="text-foreground tracking-wider px-4 py-2 flex items-center">
                {title && <h1 className="font-semibold capitalize">{title}</h1>}
                <div className="ms-auto">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-lg"
                        onClick={handleCloseModal}
                        aria-label="Close modal"
                    >
                        <BsX />
                    </Button>
                </div>
            </header>
            <div className="flex-1 px-6 pb-3 flex items-center justify-center">
                {children}
            </div>
        </dialog>
    );
};

export default Dialog;

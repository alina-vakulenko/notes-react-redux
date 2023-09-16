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
            className="flex flex-col border-2 w-[500px] min-h-[350px] bg-popover rounded-lg backdrop:backdrop-blur-sm backdrop:bg-black-50"
        >
            <header className="bg-primary text-primary-foreground tracking-wider px-4 py-2 flex align-middle">
                {title && <h1 className="text-lg font-semibold">{title}</h1>}
                <div className="ms-auto">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                        onClick={handleCloseModal}
                        aria-label="Close modal"
                    >
                        <BsX />
                    </Button>
                </div>
            </header>
            <div className="flex-1 px-6 py-2 flex items-center justify-center">
                {children}
            </div>
        </dialog>
    );
};

export default Dialog;

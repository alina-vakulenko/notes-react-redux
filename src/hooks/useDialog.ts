import { useRef, useEffect, MouseEvent } from "react";

export const useDialog = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current?.showModal();
            document.body.classList.add("overflow-hidden");
        }
    }, []);

    const closeDialog = () => {
        dialogRef.current?.close();
        document.body.classList.remove("overflow-hidden");
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

    return {
        dialogRef,
        closeDialog,
        isClickedOutside,
    };
};

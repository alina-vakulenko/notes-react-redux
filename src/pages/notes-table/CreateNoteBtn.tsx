import { useLocation, useNavigate } from "react-router-dom";
import { RxPlus } from "react-icons/rx";

import { Button } from "@/components/ui/button";

export default function CreateNoteBtn() {
    const location = useLocation();
    const navigate = useNavigate();

    const openNoteModalForm = () => {
        navigate("/create", { state: { backgroundLocation: location } });
    };

    return (
        <div className="sticky bottom-1 text-center">
            <Button
                className="rounded-full h-14 w-14"
                onClick={openNoteModalForm}
            >
                <RxPlus className="h-4 w-4" />
            </Button>
        </div>
    );
}

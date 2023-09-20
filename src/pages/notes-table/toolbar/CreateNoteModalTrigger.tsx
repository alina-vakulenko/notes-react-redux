import { useLocation, useNavigate } from "react-router-dom";
import { RxPlusCircled } from "react-icons/rx";

import { Button } from "@/components/ui/button";

export default function CreateNoteModalTrigger() {
    const location = useLocation();
    const navigate = useNavigate();

    const openNoteModalForm = () => {
        navigate("/create", { state: { backgroundLocation: location } });
    };

    return (
        <Button
            variant="outline"
            size="sm"
            className="h-8 border-dashed"
            onClick={openNoteModalForm}
        >
            <RxPlusCircled className="mr-2 h-4 w-4" />
            Create
        </Button>
    );
}

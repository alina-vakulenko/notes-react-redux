import { Link, useLocation } from "react-router-dom";
import { RxPlusCircled } from "react-icons/rx";

import { Button } from "@/components/ui/button";

export default function CreateNoteModalTrigger() {
    const location = useLocation();

    return (
        <Link to="/create" state={{ backgroundLocation: location }}>
            <Button variant="outline" size="sm" className="h-8">
                <RxPlusCircled className="mr-2 h-4 w-4" />
                New Note
            </Button>
        </Link>
    );
}

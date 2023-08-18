import { useState } from "react";
import Switcher from "../../components/switcher/Switcher";
import ActiveNotesTable from "../notes-active/ActiveNotesTable";
import ArchivedNotesTable from "../notes-archived/ArchivedNotesTable";

const Notes = () => {
    const [hideArchived, setHideArchived] = useState(true);

    return (
        <>
            <div className="mr-auto mb-2">
                <Switcher
                    label="Hide archived notes"
                    checked={hideArchived}
                    onChange={() => setHideArchived((prev) => !prev)}
                />
            </div>
            <ActiveNotesTable />
            {!hideArchived && <ArchivedNotesTable />}
        </>
    );
};

export default Notes;

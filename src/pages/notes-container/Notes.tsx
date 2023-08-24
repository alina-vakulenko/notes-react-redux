import { useSearchParams } from "react-router-dom";
import Switcher from "../../components/switcher/Switcher";
import NotesTable from "../notes-table/NotesTable";
import DemoPage from "../payments/Payments";

const Notes = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showArchived = searchParams.get("withArchived") === "y";

    const toggleShowArchivedNotes = () => {
        if (showArchived) {
            searchParams.delete("withArchived");
            setSearchParams(searchParams);
        } else {
            setSearchParams({ ...searchParams, withArchived: "y" });
        }
    };

    return (
        <>
            <div className="mr-auto mb-2">
                <Switcher
                    label="Show archived notes"
                    checked={showArchived}
                    onChange={toggleShowArchivedNotes}
                />
            </div>
            <NotesTable />
            <DemoPage />
        </>
    );
};

export default Notes;

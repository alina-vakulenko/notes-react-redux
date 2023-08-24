import Table from "../../components/table";

import {
    selectNotesStats,
    selectCategories,
} from "../../redux/notes/notesSlice";
import { useAppSelector } from "../../redux/hooks";
import { colDefinitions, statTableIds, NoteStats } from "./tableSchema";
import { CategoryEnum } from "../types";

const SummaryNotesTable = () => {
    const notesStats = useAppSelector((state) => selectNotesStats(state));
    const categories = useAppSelector((state) => selectCategories(state));

    const rows: NoteStats[] = [];

    categories.forEach((category) =>
        rows.push({
            id: statTableIds[category as CategoryEnum],
            category: category as CategoryEnum,
            active: notesStats[category].active,
            archived: notesStats[category].archived,
        })
    );

    return <Table caption="Summary" columns={colDefinitions} rows={rows} />;
};

export default SummaryNotesTable;

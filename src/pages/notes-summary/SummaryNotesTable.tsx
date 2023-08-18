import Table from "../../components/table";

import {
    selectNotesStats,
    selectCategories,
} from "../../redux/notes/notesSlice";
import { useAppSelector } from "../../redux/hooks";
import { colNames, statTableIds, NoteStats } from "./shape";
import { CategoryType } from "../types";

const SummaryNotesTable = () => {
    const notesStats = useAppSelector((state) => selectNotesStats(state));
    const categories = useAppSelector((state) => selectCategories(state));

    const rows: NoteStats[] = [];

    categories.forEach((category) =>
        rows.push({
            id: statTableIds[category as CategoryType],
            category: category as CategoryType,
            active: notesStats[category].active,
            archived: notesStats[category].archived,
        })
    );

    return <Table caption="Summary" columns={colNames} rows={rows} />;
};

export default SummaryNotesTable;

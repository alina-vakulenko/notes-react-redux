import {
    selectNotesStats,
    selectCategories,
} from "../../redux/notes/notesSlice";
import { useAppSelector } from "../../redux/hooks";
import { statTableIds, NoteStats, columns } from "./columns";
import { CategoryEnum } from "../notes-table/data/categories";
import DataTable from "@/components/table/Table";
import { useTable } from "@/hooks/useTable";

export default function SummaryNotesTable() {
    const notesStats = useAppSelector((state) => selectNotesStats(state));
    const categories = useAppSelector((state) => selectCategories(state));

    const data: NoteStats[] = [];

    categories.forEach((category) =>
        data.push({
            id: statTableIds[category as CategoryEnum],
            category: category as CategoryEnum,
            active: notesStats[category].active,
            archived: notesStats[category].archived,
        })
    );

    const { rows, headerGroups } = useTable(data, columns);

    return <DataTable rows={rows} headerGroups={headerGroups} />;
}

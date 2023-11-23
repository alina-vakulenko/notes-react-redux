import { selectNotesStats } from "@/redux/notes/notesSlice";
import { selectCategories } from "@/redux/categories/categoriesSlice";
import { useAppSelector } from "@/redux/hooks";
import { columns } from "./columns";
import DataTable from "@/components/table/data-table/DataTable";
import { useTable } from "@/hooks/useTable";
import type { NoteStats } from "@/api/schemas";

export default function SummaryNotesTable() {
    const notesStats = useAppSelector((state) => selectNotesStats(state));
    const {
        data: categories,
        status,
        error,
    } = useAppSelector(selectCategories);

    const summary: NoteStats[] = [];

    categories.forEach((category) =>
        summary.push({
            category: category,
            active: notesStats[category.name].active,
            archived: notesStats[category.name].archived,
        })
    );

    const { table } = useTable(summary, columns);

    return <DataTable table={table} />;
}

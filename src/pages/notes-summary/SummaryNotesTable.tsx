import { selectNotesStats } from "@/redux/notes/notesSlice";
import { selectCategories } from "@/redux/categories/categoriesSlice";
import { useAppSelector } from "@/redux/hooks";
import { columns } from "./columns";
import DataTable from "@/components/table/data-table/DataTable";
import { useTable } from "@/hooks/useTable";
import type { NoteStats } from "@/api/schemas";

export default function SummaryNotesTable() {
    const notesStats = useAppSelector((state) => selectNotesStats(state));
    const categories = useAppSelector(selectCategories);

    const data: NoteStats[] = [];

    categories.forEach((category) =>
        data.push({
            category: category,
            active: notesStats[category.name].active,
            archived: notesStats[category.name].archived,
        })
    );

    const { table } = useTable(data, columns);

    return <DataTable table={table} />;
}

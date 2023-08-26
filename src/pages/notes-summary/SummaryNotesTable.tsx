import {
    useReactTable,
    TableOptions,
    getCoreRowModel,
} from "@tanstack/react-table";
import {
    selectNotesStats,
    selectCategories,
} from "../../redux/notes/notesSlice";
import { useAppSelector } from "../../redux/hooks";
import { statTableIds, NoteStats, columns } from "./columns";
import { CategoryEnum } from "../notes-table/data/categories";
import DataTable from "@/components/table/Table";

const SummaryNotesTable = () => {
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

    const tableOptions: TableOptions<NoteStats> = {
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    };
    const table = useReactTable(tableOptions);

    return <DataTable table={table} />;
};

export default SummaryNotesTable;

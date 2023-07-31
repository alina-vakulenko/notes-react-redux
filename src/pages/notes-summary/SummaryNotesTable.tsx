import Table from "../../components/table";
import { ITableColumn } from "../../components/table/types";
import {
    selectNotesStats,
    selectCategories,
} from "../../redux/notes/notesSlice";
import { useAppSelector } from "../../redux/hooks";
import { CategoryType } from "../types";

const statTableIds = {
    Idea: "i3434",
    Task: "t4545",
    "Random Thought": "rs5656",
};

type NoteStats = {
    id: string;
    category: CategoryType;
    active: number;
    archived: number;
};

type SummaryTableColumn = ITableColumn<NoteStats, keyof NoteStats>;

const SummaryNotesTable = () => {
    const notesStats = useAppSelector((state) => selectNotesStats(state));
    const categories = useAppSelector((state) => selectCategories(state));

    const colNames: SummaryTableColumn[] = [
        {
            key: "category",
            header: "Category",
        },
        {
            key: "active",
            header: "Active",
            align: "center",
        },
        {
            key: "archived",
            header: "Archived",
            align: "center",
        },
    ];

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

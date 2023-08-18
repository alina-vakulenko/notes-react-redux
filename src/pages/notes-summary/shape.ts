import { ITableColumn } from "../../components/table/types";
import { CategoryType } from "../types";

export type NoteStats = {
    id: string;
    category: CategoryType;
    active: number;
    archived: number;
};

type SummaryTableColumn = ITableColumn<NoteStats, keyof NoteStats>;

export const statTableIds: Record<CategoryType, string> = {
    Idea: "i3434",
    Task: "t4545",
    "Random Thought": "rs5656",
};

export const colNames: SummaryTableColumn[] = [
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

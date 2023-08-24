import { IColDefinition } from "../../components/table/types";
import { CategoryEnum } from "../types";

export type NoteStats = {
    id: string;
    category: CategoryEnum;
    active: number;
    archived: number;
};

type SummaryTableSchema = IColDefinition<NoteStats, keyof NoteStats>[];

export const statTableIds: Record<CategoryEnum, string> = {
    Idea: "i3434",
    Task: "t4545",
    "Random Thought": "rs5656",
};

export const colDefinitions: SummaryTableSchema = [
    {
        type: "string",
        key: "category",
        colName: "Category",
    },
    { type: "string", key: "active", colName: "Active", align: "center" },
    { type: "string", key: "archived", colName: "Archived", align: "center" },
];

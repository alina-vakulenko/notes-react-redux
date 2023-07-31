import { ITableAction, ITableColumn } from "../components/table/types";
import { Note } from "../redux/notes/types";
import { ITableProps } from "../components/table/types";

export enum CategoryType {
    Idea = "Idea",
    Task = "Task",
    RandomThought = "Random Thought",
}

export enum ActiveNoteActionName {
    Edit = "edit",
    Remove = "remove",
    Archive = "archive",
}

export enum ArchivedNoteActionName {
    Remove = "remove",
    Unarchive = "archive",
}

type ActiveNotesTableAction = ITableAction<ActiveNoteActionName>;
type ArchivedNotesTableAction = ITableAction<ArchivedNoteActionName>;

type NotesTableColumn = ITableColumn<Note, keyof Note>;

type ActiveNotesTableProps = ITableProps<
    Note,
    keyof Note,
    ActiveNoteActionName
>;
type ArchivedNotesTableProps = ITableProps<
    Note,
    keyof Note,
    ArchivedNoteActionName
>;

export type {
    Note,
    NotesTableColumn,
    ActiveNotesTableAction,
    ArchivedNotesTableAction,
    ActiveNotesTableProps,
    ArchivedNotesTableProps,
};

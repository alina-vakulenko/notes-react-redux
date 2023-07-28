export interface Note {
    id: string;
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string;
    archived: boolean;
}

export interface INotesState {
    notesList: Note[];
}

import { Note } from "./types";

export type AppState = {
    notesList: Note[];
};

export const initialState: AppState = {
    notesList: [
        {
            id: "0",
            name: "Shopping list",
            created: "April 20, 2021",
            category: "task",
            content: "tomatoes, bread, eggs",
            dates: "",
            archived: false,
        },
        {
            id: "1",
            name: "The theory of evolution",
            created: "April 27, 2021",
            category: "random",
            content: "Worth reading",
            dates: "",
            archived: false,
        },
        {
            id: "2",
            name: "Appointment",
            created: "May 05, 2021",
            category: "task",
            content:
                "I’m gonna have a dentist appointment on the 5/10/2021, I moved it from 5/12/2021",
            dates: "5/10/2021, 5/12/2021",
            archived: false,
        },
        {
            id: "3",
            name: "Library",
            created: "May 15, 2021",
            category: "task",
            content: "Return three books to the library",
            dates: "",
            archived: false,
        },
        {
            id: "4",
            name: "Order birthday cake",
            created: "May 17, 2021",
            category: "task",
            content: "Should be ready by 6/1/2021",
            dates: "6/1/2021",
            archived: false,
        },
        {
            id: "5",
            name: "New css trick",
            created: "May 20, 2021",
            category: "idea",
            content: "Try it out on my pet project",
            dates: "",
            archived: false,
        },
        {
            id: "6",
            name: "New feature",
            created: "May 25, 2021",
            category: "task",
            content: "Refactor code",
            dates: "",
            archived: true,
        },
    ],
};

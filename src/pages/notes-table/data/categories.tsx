export enum CategoryEnum {
    Task = "Task",
    Idea = "Idea",
    "Random Thought" = "Random Thought",
}
export const categories = [
    { value: CategoryEnum.Idea, label: "Idea" },
    { value: CategoryEnum.Task, label: "Task" },
    { value: CategoryEnum["Random Thought"], label: "Random Thought" },
];

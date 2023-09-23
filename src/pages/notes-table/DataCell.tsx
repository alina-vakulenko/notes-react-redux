import { cn } from "@/utils/mergeClassnames";

export default function DataCell({
    value,
    isArchived,
    className,
}: {
    value: string;
    isArchived: boolean;
    className?: string;
}) {
    return (
        <span
            className={cn(
                className,
                isArchived && "line-through text-muted-foreground"
            )}
        >
            {value}
        </span>
    );
}

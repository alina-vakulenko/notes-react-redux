import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/mergeClassnames";

const Table = ({ className, ...props }: ComponentPropsWithoutRef<"table">) => (
    <table className={className} {...props} />
);

const TableCaption = ({
    className,
    ...props
}: ComponentPropsWithoutRef<"caption">) => (
    <caption className={className} {...props} />
);

const TableHeader = ({
    className,
    ...props
}: ComponentPropsWithoutRef<"thead">) => (
    <thead className={className} {...props} />
);

const TableBody = ({
    className,
    ...props
}: ComponentPropsWithoutRef<"tbody">) => (
    <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
);

const TableFooter = ({
    className,
    ...props
}: ComponentPropsWithoutRef<"tfoot">) => (
    <tfoot
        className={cn(
            "bg-primary font-medium text-primary-foreground",
            className
        )}
        {...props}
    />
);

const TableRow = ({ className, ...props }: ComponentPropsWithoutRef<"tr">) => (
    <tr
        className={cn(
            "transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
            className
        )}
        {...props}
    />
);

const TableHeaderCell = ({
    className,
    ...props
}: ComponentPropsWithoutRef<"th">) => (
    <th
        className={cn(
            "h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-2",
            className
        )}
        {...props}
    />
);

const TableCell = ({ className, ...props }: ComponentPropsWithoutRef<"td">) => (
    <td
        className={cn(
            "p-4 align-middle [&:has([role=checkbox])]:pr-2",
            className
        )}
        {...props}
    />
);

export {
    Table,
    TableCaption,
    TableHeader,
    TableBody,
    TableFooter,
    TableHeaderCell,
    TableRow,
    TableCell,
};

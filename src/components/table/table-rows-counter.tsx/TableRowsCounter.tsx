export interface TableRowsCounterProps {
    tableRowsCount: number;
    tableSelectedRowsCount: number;
}

export default function TableRowsCounter({
    tableRowsCount,
    tableSelectedRowsCount,
}: TableRowsCounterProps) {
    return (
        <div className="flex-1 text-sm text-muted-foreground">
            {tableSelectedRowsCount} of {tableRowsCount} row(s) selected.
        </div>
    );
}

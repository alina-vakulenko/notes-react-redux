interface TableRowsCounterProps {
    totalRowsCount: number;
    selectedRowsCount: number;
}

export default function TableRowsCounter({
    totalRowsCount,
    selectedRowsCount,
}: TableRowsCounterProps) {
    return (
        <div className="flex-1 text-sm text-muted-foreground">
            {totalRowsCount} of {selectedRowsCount} row(s) selected.
        </div>
    );
}

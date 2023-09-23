import { ComponentType } from "react";
import { LuCheck, LuFilter } from "react-icons/lu";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils/mergeClassnames";

interface TableColumnFilterProps {
    title: string;
    options: {
        value: string;
        label: string;
        icon?: ComponentType<{ className?: string }>;
    }[];
    columnValuesMap: Map<string, number>;
    columnFilteredValues: Set<string>;
    clearColumnFilter: () => void;
    setColumnFilter: (values: string[]) => void;
}

export default function TableColumnFilter({
    title,
    options,
    columnValuesMap,
    columnFilteredValues,
    clearColumnFilter,
    setColumnFilter,
}: TableColumnFilterProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="h-8 border-dashed"
                >
                    <LuFilter className="mr-2 h-4 w-4" />
                    <span className="capitalize">{title}</span>
                    {columnFilteredValues?.size > 0 && (
                        <>
                            <Separator
                                orientation="vertical"
                                className="mx-2 h-4"
                            />
                            <Badge
                                variant="secondary"
                                className="rounded-sm px-1 font-normal lg:hidden"
                            >
                                {columnFilteredValues.size}
                            </Badge>
                            <div className="hidden space-x-1 lg:flex">
                                {columnFilteredValues.size > 2 ? (
                                    <Badge
                                        variant="secondary"
                                        className="rounded-sm px-1 font-normal"
                                    >
                                        {columnFilteredValues.size} selected
                                    </Badge>
                                ) : (
                                    options
                                        .filter((option) =>
                                            columnFilteredValues.has(
                                                option.value
                                            )
                                        )
                                        .map((option) => (
                                            <Badge
                                                variant="secondary"
                                                key={option.value}
                                                className="rounded-sm px-1 font-normal"
                                            >
                                                {option.label}
                                            </Badge>
                                        ))
                                )}
                            </div>
                        </>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="end">
                <Command>
                    <CommandInput
                        className="placeholder:capitalize"
                        placeholder={title}
                    />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => {
                                const isSelected = columnFilteredValues.has(
                                    option.value
                                );
                                return (
                                    <CommandItem
                                        key={option.value}
                                        onSelect={() => {
                                            if (isSelected) {
                                                columnFilteredValues.delete(
                                                    option.value
                                                );
                                            } else {
                                                columnFilteredValues.add(
                                                    option.value
                                                );
                                            }
                                            const filterValues =
                                                Array.from(
                                                    columnFilteredValues
                                                );
                                            filterValues.length
                                                ? setColumnFilter(filterValues)
                                                : clearColumnFilter();
                                        }}
                                    >
                                        <div
                                            className={cn(
                                                "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                isSelected
                                                    ? "bg-primary text-primary-foreground"
                                                    : "opacity-50 [&_svg]:invisible"
                                            )}
                                        >
                                            <LuCheck
                                                className={cn("h-4 w-4")}
                                            />
                                        </div>
                                        {option.icon && (
                                            <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                                        )}
                                        <span className="capitalize">
                                            {option.label}
                                        </span>
                                        {columnValuesMap?.get(option.value) && (
                                            <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                                                {columnValuesMap.get(
                                                    option.value
                                                )}
                                            </span>
                                        )}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                        {columnFilteredValues.size > 0 && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <CommandItem
                                        onSelect={clearColumnFilter}
                                        className="justify-center text-center"
                                    >
                                        Clear filters
                                    </CommandItem>
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

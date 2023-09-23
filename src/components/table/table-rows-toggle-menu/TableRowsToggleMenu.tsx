import {
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { RxMixerHorizontal } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { useRowFilters, SEARCH_PARAMS_KEY } from "@/hooks/useRowFilters";

export default function TableRowsToggleMenu() {
    const { rowsFilter, toggleSearchParams } = useRowFilters();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="h-8 border-dashed capitalize"
                >
                    <RxMixerHorizontal className="mr-2 h-4 w-4" />
                    Rows
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
                <DropdownMenuItem className="space-x-2">
                    <Switch
                        name="toggle-rows-by-archived-status"
                        checked={
                            rowsFilter[SEARCH_PARAMS_KEY.WITH_ARCHIVED] ===
                            false
                        }
                        onCheckedChange={(checked) =>
                            toggleSearchParams(
                                !checked,
                                SEARCH_PARAMS_KEY.WITH_ARCHIVED
                            )
                        }
                    />
                    <DropdownMenuLabel>Hide archived</DropdownMenuLabel>
                </DropdownMenuItem>
                <DropdownMenuItem className="space-x-2">
                    <Switch
                        name="toggle-rows-by-dates"
                        checked={rowsFilter[SEARCH_PARAMS_KEY.DATES_ONLY]}
                        onCheckedChange={(checked) =>
                            toggleSearchParams(
                                checked,
                                SEARCH_PARAMS_KEY.DATES_ONLY
                            )
                        }
                    />
                    <DropdownMenuLabel>Hide empty dates</DropdownMenuLabel>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

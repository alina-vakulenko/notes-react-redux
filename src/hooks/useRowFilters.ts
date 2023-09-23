import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SEARCH_PARAMS_KEY = {
    WITH_ARCHIVED: "withArchived",
    DATES_ONLY: "datesOnly",
} as const;

type SearchParamsKey =
    (typeof SEARCH_PARAMS_KEY)[keyof typeof SEARCH_PARAMS_KEY];

export const useRowFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [rowsFilter, setRowsFilter] = useState({
        [SEARCH_PARAMS_KEY.WITH_ARCHIVED]: false,
        [SEARCH_PARAMS_KEY.DATES_ONLY]: false,
    });

    useEffect(() => {
        setRowsFilter({
            [SEARCH_PARAMS_KEY.WITH_ARCHIVED]:
                searchParams.get(SEARCH_PARAMS_KEY.WITH_ARCHIVED) === "y",
            [SEARCH_PARAMS_KEY.DATES_ONLY]:
                searchParams.get(SEARCH_PARAMS_KEY.DATES_ONLY) === "y",
        });
    }, [searchParams]);

    const toggleSearchParams = (prevChecked: boolean, key: SearchParamsKey) => {
        const newSearchParams = new URLSearchParams(searchParams);

        if (!prevChecked) {
            newSearchParams.delete(key);
        } else {
            newSearchParams.set(key, "y");
        }

        setSearchParams(newSearchParams);
    };

    return {
        toggleSearchParams,
        rowsFilter,
    };
};

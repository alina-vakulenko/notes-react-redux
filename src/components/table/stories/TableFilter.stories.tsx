import type { Meta, StoryObj } from "@storybook/react";
import TableFacetedFilter from "./TableFilter";
import { categories } from "@/pages/notes-table/data/categories";
import { useReactTableFilters } from "@/hooks/useReactTableHelpers";

const meta: Meta<typeof TableFacetedFilter> = {
    component: TableFacetedFilter,
    title: "Generic Table/Faceted Filter",
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TableFacetedFilter>;

const facets = new Map();
facets.set("task", 2);
facets.set("tdea", 1);
facets.set("random", 4);

const selectedValues = new Set(["random"]);

// export const Default: Story = {
//     args: {
//         title: "Category",
//         facets: facets,
//         selectedValues: selectedValues,
//         options: categories,
//         setColumnFilter: (values: string[]) =>
//             values.forEach((value) => selectedValues.add(value)),
//         clearColumnFilter: () => selectedValues.clear(),
//     },
// };

export const Default: Story = () => {
    const setColumnFilter = () => {
        console.log("setting column filter");
    };
    const clearColumnFilter = () => {
        console.log("clearing column filter");
    };

    return (
        <TableFacetedFilter
            title="Category"
            facets={facets}
            options={categories}
            selectedValues={selectedValues}
            setColumnFilter={setColumnFilter}
            clearColumnFilter={clearColumnFilter}
        />
    );
};

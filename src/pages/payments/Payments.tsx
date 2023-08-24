import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

const DemoPage = () => {
    const data: Payment[] = [
        { id: "1", status: "success", email: "ken99@yahoo.com", amount: 316 },
        { id: "2", status: "success", email: "abe45@gmail.com", amount: 242 },
        {
            id: "3",
            status: "processing",
            email: "monserrat44@gmail.com",
            amount: 837,
        },
        { id: "4", status: "success", email: "silas22@gmail.com", amount: 874 },
        {
            id: "5",
            status: "failed",
            email: "carmella@hotmail.com",
            amount: 721,
        },
    ];
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default DemoPage;

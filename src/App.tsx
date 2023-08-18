import SummaryNotesTable from "./pages/notes-summary/SummaryNotesTable";
import Notes from "./pages/notes-container/Notes";

function App() {
    return (
        <div className="p-12 flex flex-col items-center min-h-screen text-clamp">
            <Notes />
            <SummaryNotesTable />
        </div>
    );
}

export default App;

import SummaryNotesTable from "./pages/notes-summary/SummaryNotesTable";
import Notes from "./pages/notes-container/Notes";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Notes />
            <SummaryNotesTable />
        </div>
    );
}

export default App;

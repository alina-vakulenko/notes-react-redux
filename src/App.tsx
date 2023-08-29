import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./pages/Layout";
import NotesTable from "./pages/notes-table/NotesTable";
import SummaryNotesTable from "./pages/notes-summary/SummaryNotesTable";
import NoteFormModal from "./pages/form-modal/NoteFormModal";
import ErrorPage from "./pages/error/ErrorPage";

const App = () => {
    const location = useLocation();
    const state = location.state as { backgroundLocation?: Location };

    return (
        <>
            <Routes location={state?.backgroundLocation || location}>
                <Route
                    path="/"
                    element={<Layout />}
                    errorElement={<ErrorPage />}
                >
                    <Route index element={<NotesTable />} />
                    <Route path="/summary" element={<SummaryNotesTable />} />
                </Route>
            </Routes>
            {state?.backgroundLocation && (
                <Routes>
                    <Route path="/create" element={<NoteFormModal />} />
                    <Route path="/edit/:id" element={<NoteFormModal />} />
                </Routes>
            )}
        </>
    );
};

export default App;

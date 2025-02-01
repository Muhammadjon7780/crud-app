import { Route, Routes } from "react-router-dom";
import DataProvider from "./context/context";
import BranchItem from "./pages/branch-item";
import "./sass/main.scss";
import Branch from "./pages/branch";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Branch />} />
        <Route path="/branchitem/:id" element={<BranchItem />} />
      </Routes>
    </DataProvider>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import DataProvider from "./context/context";
import Main from "./pages/main";
import BranchItem from "./pages/branch-item";
import "./sass/main.scss";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/branchitem/:id" element={<BranchItem />} />
      </Routes>
    </DataProvider>
  );
}

export default App;

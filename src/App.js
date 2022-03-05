import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Productos from "./routes/Productos";
import Editar from "./routes/Editar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/productos"/>} />
            <Route path="productos" element={<Productos />} />
            <Route path="editar/:productId" element={<Editar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

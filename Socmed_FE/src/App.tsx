import { Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import Detail from "./pages/Detail";
import { FormRegister } from "./features/auth/componenst/FormRegister";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="/detailStatus/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;

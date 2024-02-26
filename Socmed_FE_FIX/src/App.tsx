import { Route, Routes } from "react-router-dom";
import { FormRegister } from "./features/Auth/components/FormRegister";
import FormLogin from "./features/Auth/components/FormLogin";
import { PageThread } from "./pages/PageThread";
import { PageSearch } from "./pages/PageSearch";
import { PageFollow } from "./pages/PageFollow";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageThread />} />
        <Route path="/search" element={<PageSearch />} />
        <Route path="/follow" element={<PageFollow />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="/login" element={<FormLogin />} />
        {/* <Route path="/detailStatus/:id" element={<Detail />} /> */}
      </Routes>
    </>
  );
}

export default App;

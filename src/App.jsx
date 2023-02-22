import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./widgets/layout/topbar";
import { Footer } from "./widgets/layout";
import routes from "@/routes";
import 'tw-elements';
function App() {
  return (
    <>
      <div className="w-full absolute z-50">
        <Topbar/>
      </div>
      <div className="relative z-20">
        <Routes>
          {routes.map(
            ({ path, element }, key) =>
              element && <Route key={key} exact path={path} element={element} />
          )}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
      <Footer/>

    </>
  );
}

export default App;

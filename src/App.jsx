import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./widgets/layout/topbar";
import { Footer } from "./widgets/layout";
import { LogIn } from "./pages";
import { SignUp } from "./pages";
import routes from "@/routes";
import 'tw-elements'; 
function App() {
  return (
    // <div className="bg-background bg-repeat-y">
    <div style={{backgroundImage: "url(img/image/background.png)", backgroundSize:"cover"}}>  
      <div className="w-full absolute z-50">
        <Topbar/>
      </div>
      <div className="relative z-20">
        <Routes>
          {routes.map(
            ({ path, element }, key) =>
              element && <Route key={key} exact path={path} element={element} />
          )}
          <Route exact path="/login" element={<LogIn/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

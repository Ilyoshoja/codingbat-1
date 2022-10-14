import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Problem, Login, Register,Subject, Main} from "./pages";

const App: FC = () => (
  <div>
    <Routes>
      
      <Route path='' element={<Home />}>
      <Route index element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path="main" element = {<Main/>}>
      <Route index element={<Subject />} />
      <Route path='problem' element={<Problem />} />
      </Route>
      
      </Route>
      
   
    </Routes>
  </div>
);

export default App;

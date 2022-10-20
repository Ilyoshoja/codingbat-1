import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "./hooks/hook";
import { Problem, Login, Register, Subject, Main, ProtectedRoute } from "./pages";
import './sass/App.scss'
function App() {
  let isloged = useAppSelector(state => state.islogged.value);
  let id = useAppSelector(state => state.langId.id);
   console.log(isloged);
   
  
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path={isloged ?`/:${id}`: ""} element={<Main />}>
            <Route index element={<Subject />} />
            <Route path='problem' element={<Problem />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )

};

export default App;

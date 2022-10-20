import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "./hooks/hook";
import { Problem, Login, Register, Subject, Main, ProtectedRoute } from "./pages";
import './sass/App.scss'
function App() {

  let id = useAppSelector(state => state.langId.id);



  return (
    <div>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path={`/:${id}`} element={<Main />}>
            <Route index element={<Subject />} />
            <Route path='problem' element={<Problem />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )

};

export default App;

import './App.css'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Edit from './components/updateuser/Edit.jsx'
import User from './components/getuser/User.jsx'
import Add from './components/adduser/Add.jsx'



function App() {
  
  // You can do this:
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="" element={<User />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="add" element={<Add />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
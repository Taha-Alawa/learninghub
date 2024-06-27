import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import "./styles.scss"
import Service from "./pages/Service";

const Router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="service" element={<Service />} />
    <Route path="features" element={<Service />} />
    <Route path="product" element={<Service />} />
    <Route path="testmonial" element={<Service />} />
    <Route path="faq" element={<Service />} />
  </Route>
))

function App() {

  return (
    <RouterProvider router={Router} />
  )
}

export default App

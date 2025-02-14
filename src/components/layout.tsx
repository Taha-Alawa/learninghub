import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
const layout = () => {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  )
}

export default layout

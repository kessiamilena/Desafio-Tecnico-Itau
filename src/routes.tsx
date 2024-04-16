import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PerfilHeroi from "./pages/PerfilHeroi/heroi"

function MainRoutes() {

    return (
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="perfil/:id" element={<PerfilHeroi/>} />
        </Routes>
    )
}

export default MainRoutes
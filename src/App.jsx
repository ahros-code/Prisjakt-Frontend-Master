import {Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";

function App(){
    return (
        <Routes>
            <Route path={"/"} element={<Layout />}>
                <Route path={"/"} element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App;
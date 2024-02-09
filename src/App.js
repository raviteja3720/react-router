import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./Pages/Help/Faq";
import Contact from "./Pages/Help/Contact";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="help" element={<HelpLayout />}>
                <Route path="faq" element={<Faq />}></Route>
                <Route path="contact" element={<Contact />}></Route>
            </Route>
        </Route>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;

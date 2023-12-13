import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>

        // <BrowserRouter>

        //     <main>

        //     </main>
        // </BrowserRouter>
    );
}

export default App;

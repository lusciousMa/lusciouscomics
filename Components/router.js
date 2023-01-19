import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/page";
import Child from "../Pages/child";

function RouterComponent() {

    return (
        <>
            {/* All possible routes */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:id" element={<Child />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default RouterComponent;
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
export default function App() {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/details/:id", element: _jsx(Details, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }));
}

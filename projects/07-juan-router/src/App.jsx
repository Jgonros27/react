import "./App.css";
import { Suspense, lazy } from "react";
import Route from "./Route.jsx";
import { Router } from "./Router.jsx";
const LazyPage404 = lazy(() => import("./pages/404.jsx"));
const LazyAboutPage = lazy(() => import("./pages/About.jsx"));
const LazyHomePage = lazy(() => import("./pages/Home"));
const LazySearchPage = lazy(() => import("./pages/Search.jsx"));

const appRoutes = [
  {
    path: "/search/:query",
    Component: LazySearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={LazyPage404}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;

import "./App.css";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Dashboard />
    </Suspense>
  );
}

export default App;
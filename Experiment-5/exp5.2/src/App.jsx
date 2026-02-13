import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy imports
const Dashboard = lazy(() => import("./components/Dashboard"));
const ProfileInfo = lazy(() => import("./components/Profile"));
const Skills = lazy(() => import("./components/Skills"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Redirect root */}
          <Route path="/" element={<Navigate to="/dashboard/info" />} />

          {/* Dashboard Parent */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="info" element={<ProfileInfo />} />
            <Route path="skills" element={<Skills />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

function Loading() {
  return (
    <div style={styles.loadingContainer}>
      <h2 style={styles.loadingText}>Loading...</h2>
    </div>
  );
}

const styles = {
  loadingContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    zIndex: 9999,
  },
  loadingText: {
    color: "black",
    fontSize: "24px",
    fontWeight: "bold",
  },
};

export default App;


import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import MovieDetailPage from "./pages/MovieDetailPage";



function App() {
  return (
    <>
      <main className="flex h-screen">
        <Routes>
          <Route path="/" element={<Navigate to="/signin"  />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
   
    </>
  )
}

export default App
import { Button } from "@/components/ui/button"
import { Routes, Route } from "react-router-dom";
import SignIn from "./auth/forms/SignIn";
import SignUp from "./auth/forms/SignUp";
import AuthLayout from "./auth/AuthLayout";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        </Routes>
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
    </main>
  )
}

export default App
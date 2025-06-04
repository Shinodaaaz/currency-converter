import { Routes, Route } from 'react-router-dom'
import RatesPage from "@/pages/Rates/RatesPage.tsx";
import {LoginPage} from "@/pages/Login/LoginPage.tsx";
import ProtectedRoute from "@/shared/ui/ProtectedRoute/ProtectedRoute.tsx";
import MainLayout from "@/layouts/MainLayouts.tsx";
import {NotFound} from "@/shared/ui/Notfound/NotFound.tsx";
import {ConvertPage} from "@/pages/Convert/ConvertPage.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/rates" element={<RatesPage />} />
        <Route path="/convert" element={<ConvertPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

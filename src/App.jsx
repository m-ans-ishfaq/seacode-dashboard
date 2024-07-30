import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./routes/home"
import { Page1 } from "./routes/page-1"
import { Page2 } from "./routes/page-2"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-1" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  )
}
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./routes";
import { ContactUs } from "./routes/contact-us";
import { LogIn } from "./routes/log-in";
import { SignUp } from "./routes/sign-up";
import { Quotes } from "./routes/quotes";
import { Users } from "./routes/users";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { SignIn } from './Pages/SignIn'
import { SignUp } from './Pages/SignUp'
import { PasswordReset } from './Pages/PasswordReset'


export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/recuperar_senha" element={<PasswordReset />} />
    </Routes>
  )
}

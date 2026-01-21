import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Redirect from './redirect.tsx';
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/resume" element={<Redirect href="https://drive.google.com/file/d/19hLkURpDIViuhCE0YQf5_Vm9PrkAf6Ns/view?usp=sharing" />} />
      <Route path="/freelance" element={<Redirect href="https://freelance.maybetarun.in" />} />
      <Route path="/github" element={<Redirect href="https://github.com/maybetarun" />} />
      <Route path="/guthub" element={<Redirect href="https://github.com/maybetarun" />} />
      <Route path="/twitter" element={<Redirect href="https://twitter.com/maybetarun" />} />
      <Route path="/linkedin" element={<Redirect href="https://linkedin.com/in/maybetarun" />} />
      <Route path="/instagram" element={<Redirect href="https://instagram.com/maybe._.tarun" />} />
      <Route path="/medium" element={<Redirect href="https://medium.com/@maybetarun" />} />
      <Route path="/message" element={<Redirect href="https://x.com/messages/compose?recipient_id=MaybeTarun" />} />
      <Route path="/msg" element={<Redirect href="https://x.com/messages/compose?recipient_id=MaybeTarun" />} />
      <Route path="/talk" element={<Redirect href="https://x.com/messages/compose?recipient_id=MaybeTarun" />} />
      <Route path="/dm" element={<Redirect href="https://x.com/messages/compose?recipient_id=MaybeTarun" />} />
      <Route path="/contact" element={<Redirect href="https://x.com/messages/compose?recipient_id=MaybeTarun" />} />
    </Routes>
    </BrowserRouter>
    <Analytics />
  </StrictMode>
)
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import SurahDetailPage from "./pages/SurahDetailPage"
import ErrorPage from "./pages/ErrorPage"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/surah/:id" element = {<SurahDetailPage />} />
        <Route path  = "*" element = {<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

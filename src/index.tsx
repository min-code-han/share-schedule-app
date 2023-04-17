import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import GlobalStyle from "./style/GlobalStyle"
import Main from "./pages/Main"
import "./Font/Font.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/form",
    element: <div>Hello this is detail page</div>
  }
])

// @ts-ignore
const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
)

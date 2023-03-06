import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from "./Main"

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
root.render(<RouterProvider router={router} />)

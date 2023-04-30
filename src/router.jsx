import { createBrowserRouter } from "react-router-dom"
import App from './App'
import Content from "./components/Content"
import Error from './components/Error'

const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Content/>,
            },
            {
                path: '*',
                element: <Error/>,
            }
        ]
    }
])

export default router
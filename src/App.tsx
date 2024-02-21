import { OderContextProvider } from './context/OrderContext'
import { RouterApp } from './pages/Routes'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <OderContextProvider>
        <RouterApp />
      </OderContextProvider>
    </BrowserRouter>
  )
}

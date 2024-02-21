import { Route, Routes } from 'react-router-dom'
import { Home } from './home'
import { LayoutDefault } from './LayoutDefault'
import { CheckOut } from './checkout'
import { LayoutCheckout } from './LayoutCheckout'
import { Success } from './success'
import { Orders } from './orders'

export function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<span>TESTES LUCAS</span>}></Route>
      </Route>

      <Route path="/coffee" element={<LayoutDefault />}>
        <Route path="/coffee" element={<Home />}></Route>
        <Route path="/coffee/orders" element={<Orders />}></Route>
      </Route>

      <Route path="/coffee" element={<LayoutCheckout />}>
        <Route path="/coffee/checkout" element={<CheckOut />}></Route>
        <Route path="/coffee/success" element={<Success />}></Route>
      </Route>
    </Routes>
  )
}

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
        <Route path="/" element={<Home />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Route>

      <Route path="/" element={<LayoutCheckout />}>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Route>
    </Routes>
  )
}

import logo from '../../assets/images/Logo.png'
import { MapPin, Planet } from '@phosphor-icons/react'
import CarDialog from './Cart'
import { useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const { quantityOrders } = useContext(OrderContext)
  const location = useLocation()
  return (
    <header className=" flex justify-between w-full px-40 py-8 fixed z-[1]">
      <Link to={'/'}>
        <img src={logo} alt="Logo empresa" className="rounded-md h-20" />
      </Link>
      <div className="flex gap-3 items-center justify-center">
        {quantityOrders && location.pathname !== '/orders' ? (
          <Link
            to={'/orders'}
            className="bg-yellow_light text-yellow_dark flex items-center justify-center gap-1 p-2 rounded-md font-roboto text-sm font-semibold"
          >
            <Planet size={22} className="text-yellow" weight="fill" />
            Meus pedidos
          </Link>
        ) : null}

        <div className="bg-purple_light text-purple_dark flex items-center justify-center gap-1 p-2 rounded-md font-roboto text-sm font-semibold">
          <MapPin size={22} className="text-purple" weight="fill" />
          Fortaleza, CE
        </div>
        <CarDialog />
      </div>
    </header>
  )
}

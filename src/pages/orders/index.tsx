import { useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'
import { TrItens } from './components/TrItens'
import { TrHeader } from './components/TrHeader'
import { GoToHome } from '../components/goToHome'
import { MaskSad } from '@phosphor-icons/react'

export function Orders() {
  const { quantityOrders } = useContext(OrderContext)

  return (
    <main className="lg:p-40 py-40 px-8 flex flex-col">
      {quantityOrders ? (
        <div className="flex justify-center items-start  rounded-md py-4 min-w-[320px] ring-1 ring-base_hover max-h-[60vh] overflow-auto">
          <table className="font-baloow-full text-left border-collapse w-full">
            <TrHeader />
            <TrItens />
          </table>
        </div>
      ) : (
        <span className=" text-2xl flex items-center gap-2">
          Você ainda não fez nenhum pedido{' '}
          <MaskSad size={32} weight="fill" className="text-purple" />
        </span>
      )}
      <GoToHome className="w-fit mt-6 py-2 px-4 bg-purple uppercase font-baloo font-bold text-white rounded-md hover:opacity-90 text-center text-sm" />
    </main>
  )
}

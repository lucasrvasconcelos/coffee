import { useContext } from 'react'
import { OrderContext } from '../../../context/OrderContext'
import { Td } from './Td'
import { currency, renderSwitchPayment } from '../../../utils/order'
import { ItensOrder } from './itensOrder'

export function TrItens() {
  const { order } = useContext(OrderContext)
  return (
    <>
      {order.map((order) => {
        return (
          <tr
            key={order.idOrder}
            className="text-left border-collapse min-w-full font-baloo p-8 border-2 border-base_card text-sm px-10"
          >
            <Td>{order.idOrder}</Td>
            <Td className="font-bold px-[18px] text-green-700">
              {currency(order.totalOrder)}
            </Td>
            <Td className="font-baloo font-bold pl-[18px] ">
              {renderSwitchPayment(order.payment)}
            </Td>
            <Td className="cursor-pointer font-bold px-[18px]">
              <ItensOrder
                total={order.totalOrder}
                orderId={order.idOrder}
                itensOrder={order.itemsOrder}
              />
            </Td>
            <Td>
              {order.address.rua}, {order.address.rua} - {order.address.bairro}
            </Td>
            <Td>{order.dateOrder}</Td>
            <Td status={order.statusOrder.toLowerCase()}>
              {order.statusOrder}
            </Td>
          </tr>
        )
      })}
    </>
  )
}

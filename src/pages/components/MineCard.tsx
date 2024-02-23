import { TrashSimple } from '@phosphor-icons/react'
import { OrderContext, PreOrderType } from '../../context/OrderContext'
import { useContext } from 'react'
import { currency } from '../../utils/order'

interface MineCardProps {
  itensOrder: PreOrderType
}

export function MineCard({ itensOrder }: MineCardProps) {
  const { updateItemsPreOrder, deleteItemPreOrder } = useContext(OrderContext)

  function handleDeleteItemPreOrder() {
    deleteItemPreOrder(itensOrder.idItensPed)
  }

  return (
    <li
      className="md:flex md:items-center md:justify-between px-2 py-4
                 grid grid-cols-2 gap-y-0"
    >
      <img src={itensOrder.imageProduct} alt="" className="size-16" />
      <div className="md:mr-6 flex-col flex gap-2 font-baloo text-sm">
        <span className="-ml-7 md:ml-4 font-bold text-center md:text-left">
          {itensOrder.nameProduct}
        </span>

        <div className="flex items-center flex-col md:flex-row justify-center md:w-48 px-4 gap-4 ">
          <div className="bg-base_button flex items-center justify-center rounded-md w-[80px] md:w-full">
            <button
              type="button"
              onClick={() => updateItemsPreOrder(itensOrder.idItensPed, -1)}
              className="text-purple hover:text-purple_dark hover:bg-slate-300 flex-1 font-bold"
            >
              -
            </button>
            <span className="font-baloo px-2 font-semibold text-base_title">
              {itensOrder.quantityProduct}
            </span>
            <button
              type="button"
              onClick={() => updateItemsPreOrder(itensOrder.idItensPed, 1)}
              className=" text-purple hover:text-purple_dark hover:bg-slate-300 flex-1 font-bold"
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={() => handleDeleteItemPreOrder()}
            className="flex items-center justify-center gap-1 group-delete hover:opacity-90 font-semibold text-base_title uppercase font-baloo text-sm"
          >
            <TrashSimple className="text-purple " weight="fill" />
            Remover
          </button>
        </div>
      </div>
      <span className="font-semibold font-baloo w-20 text-center text-xl text-yellow_dark">
        {currency(itensOrder.subtotal)}
      </span>
    </li>
  )
}

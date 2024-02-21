import { CodesandboxLogo, XCircle } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { currency } from '../../../utils/order'

interface ItensOrderProps {
  orderId: string
  itensOrder: {
    idProduct: number
    nameProduct: string
    quantity: number
    subtotal: number
  }[]
  total: number
}
export function ItensOrder({ orderId, itensOrder, total }: ItensOrderProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="p-2 rounded-md relative hover:bg-yellow_light">
          <CodesandboxLogo
            size={22}
            className="text-yellow_dark"
            weight="fill"
          />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0 z-[1]" />
        <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[470px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[1]">
          <Dialog.Title className="m-0 text-[20px] font-baloo font-bold flex flex-col">
            Pedido de número:
            <span>{orderId}</span>
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            <span className="text-red-600 text-bold font-baloo">
              Em caso de desistência, entre em contato com a loja
            </span>
          </Dialog.Description>
          <ul className="overflow-auto max-h-[50vh] list-none flex flex-col font-baloo font-bold">
            {itensOrder.map((itens) => {
              return (
                <li key={itens.idProduct}>
                  {itens.quantity} x {itens.nameProduct}:{' '}
                  {currency(itens.subtotal)}
                </li>
              )
            })}
          </ul>
          <span className="font-baloo text-2xl absolute bottom-5 font-bold text-yellow_dark">
            Total: {currency(total)}
          </span>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button className="inline-flex items-center justify-center px-[15px] font-medium leading-none outline-none hover:opacity-90 transition-colors py-3 ring-1 ring-purple bg-purple text-white rounded-md">
                Fechar
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="text-yellow_dark absolute right-2 top-3 focus:shadow-md focus:shadow-black">
              <XCircle
                size={30}
                className="text-yellow_dark absolute right-2 top-3"
                weight="fill"
              />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

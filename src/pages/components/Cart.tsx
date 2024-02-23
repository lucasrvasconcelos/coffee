import * as Dialog from '@radix-ui/react-dialog'
import { OrderContext } from '../../context/OrderContext'
import { useContext, useState } from 'react'
import { ShoppingCart, XCircle } from '@phosphor-icons/react'
import { DeleteCart } from './DeleteCart'
import { ItemsCart } from './ItemsCart'
import { TotalOrder } from './TotalOrder'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { preOrder, subTotalOrder } = useContext(OrderContext)
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="bg-yellow_light p-2 rounded-md relative">
          <ShoppingCart size={22} className="text-yellow_dark" weight="fill" />
          <span className="absolute text-xs -right-1 -top-1 flex items-center justify-center leading-none py-0.5 px-1 bg-yellow_dark text-background font-baloo rounded-full">
            {/* Quantidade que mostra no ícone do carrinho */}
            {preOrder.length}
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0 z-[1]" />
        <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[470px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[1]">
          <Dialog.Title className="m-0 text-[20px] font-baloo font-bold">
            Carrinho
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            {preOrder.length ? (
              <span>
                Confira os itens e clique em{' '}
                <strong className="text-purple_dark">Finalizar</strong>.
              </span>
            ) : (
              'Você não tem itens adicionados.'
            )}
          </Dialog.Description>
          <ul className="overflow-auto max-h-[50vh] list-none flex flex-col">
            <ItemsCart />
          </ul>

          <div className="mt-[25px] flex justify-end">
            <TotalOrder sumOrder={subTotalOrder} />
            {preOrder.length ? (
              <div className="flex items-center justify-center gap-4">
                <DeleteCart />
                <Link
                  onClick={() => setOpen((state) => !state)}
                  to={'/checkout'}
                  className="bg-yellow_dark text-background hover:opacity-90 inline-flex items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none py-3"
                >
                  Finalizar
                </Link>
              </div>
            ) : (
              false
            )}
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

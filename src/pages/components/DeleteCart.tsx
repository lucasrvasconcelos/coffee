import { useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

export function DeleteCart() {
  const { deleteItemPreOrder } = useContext(OrderContext)

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className=" inline-flex items-center justify-center rounded-[4px] bg-background  font-medium leading-none outline-none hover:opacity-90 transition-colors">
          Limpar
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0 z-[1]" />
        <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[1]">
          <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Deseja limpar todos os itens do carrinho?
          </AlertDialog.Title>
          <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
            Todo o processo de seleção dos itens será desfeito.
          </AlertDialog.Description>
          <div className="flex justify-end gap-[25px]">
            <AlertDialog.Cancel asChild>
              <button className="font-baloo font-medium ring-1 ring-slate-400 hover:opacity-90  inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] leading-none outline-none focus:shadow-[0_0_0_2px]">
                Cancelar
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                onClick={() => deleteItemPreOrder('deleteAllItens')}
                className="font-baloo font-bold ring-1 ring-red-300 text-background bg-red-500 hover:opacity-90 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] leading-none outline-none focus:shadow-[0_0_0_2px]"
              >
                Limpar
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

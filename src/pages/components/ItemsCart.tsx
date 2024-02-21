import * as ScrollArea from '@radix-ui/react-scroll-area'
import { useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'
import { MineCard } from './MineCard'

export function ItemsCart({ ...rest }) {
  const { preOrder } = useContext(OrderContext)
  return (
    <ScrollArea.Root
      className="w-[100%] h-[325px] rounded overflow-hidden pr-4"
      {...rest}
    >
      <ScrollArea.Viewport className="w-full h-full rounded">
        {preOrder.map((itensOrder) => {
          return (
            <MineCard key={itensOrder.idItensPed} itensOrder={itensOrder} />
          )
        })}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex select-none touch-none p-0.5 bg-base_input transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="flex-1 bg-yellow_dark rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="flex select-none touch-none p-0.5 bg-base_input transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="flex-1 bg-yellow_dark rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="bg-base_input" />
    </ScrollArea.Root>
  )
}

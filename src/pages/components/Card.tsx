import { ShoppingCart } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { OrderContext, PreOrderType } from '../../context/OrderContext'
import { v4 as uuidv4 } from 'uuid'
import { currency } from '../../utils/order'

interface CardProps {
  product: {
    id: number
    image: string
    type: string[]
    title: string
    price: number
    description: string
  }
}

export function Card({ product }: CardProps) {
  const { setItemsPreOrder } = useContext(OrderContext)
  const [quantity, setQuantity] = useState(1)

  function handleDecreaseQuantity(quantity: number) {
    setQuantity((state) => {
      if (state + quantity === 0) {
        return state
      }
      return state + quantity
    })
  }

  function handleAddItemOrder() {
    const newItems: PreOrderType = {
      idItensPed: uuidv4(),
      idProduct: product.id,
      imageProduct: product.image,
      nameProduct: product.title,
      quantityProduct: quantity,
      priceProduct: product.price,
      subtotal: quantity * product.price,
    }
    setItemsPreOrder(newItems)
    setQuantity(1)
  }

  return (
    <div className="bg-base_card flex flex-col items-center justify-center rounded-tl-[18px] rounded-br-[18px] rounded-tr-[50px] rounded-bl-[50px] w-80">
      <div className="w-fi flex flex-col items-center justify-center -translate-y-9">
        <img src={product.image} alt="" className="size-32" />
        <span className="uppercase font-roboto text-xs mt-3 font-bold flex gap-1">
          {product.type.map((type: string) => {
            return (
              <span
                className="bg-yellow_light text-yellow_dark px-2 py-1 rounded-lg"
                key={type}
              >
                {type}
              </span>
            )
          })}
        </span>
        <h3 className="font-bold font-baloo text-lg mt-4 text-base_subtitle">
          {product.title}
        </h3>
        <p className="px-2 text-center text-base_label tracking-wider	">
          {product.description}
        </p>

        <div className="flex mt-8 items-center justify-center gap-2 text-2xl h-10">
          <span className="font-bold font-baloo mr-6 text-base_text">
            {currency(product.price)}
          </span>
          <div className="bg-base_button flex items-center justify-center gap-1 px-2 rounded-md">
            <button
              className="p-1 text-purple hover:text-purple_dark"
              onClick={() => handleDecreaseQuantity(-1)}
            >
              -
            </button>
            <span className="px-2 text-xl font-semibold font-baloo">
              {quantity}
            </span>
            <button
              className="p-1 text-purple hover:text-purple_dark"
              onClick={() => handleDecreaseQuantity(1)}
            >
              +
            </button>
          </div>

          <button
            className="bg-purple_dark flex-1 size-10 flex items-center justify-center rounded-md hover:bg-purple"
            onClick={handleAddItemOrder}
          >
            <ShoppingCart className="text-background " weight="fill" />
          </button>
        </div>
      </div>
    </div>
  )
}

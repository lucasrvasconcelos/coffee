import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

export interface PreOrderType {
  idItensPed: string
  idProduct: number
  imageProduct: string
  nameProduct: string
  quantityProduct: number
  priceProduct: number
  subtotal: number
}

interface CreateOrderAddressProps {
  cep: string
  rua: string
  numero: string
  bairro: string
  cidade: string
  uf: string
  payment: string
}

type itensOrder = {
  idProduct: number
  nameProduct: string
  quantity: number
  subtotal: number
}

interface OrderType {
  idOrder: string
  itemsOrder: itensOrder[]
  address: CreateOrderAddressProps
  payment: string
  dateOrder: string
  statusOrder: string
  totalOrder: number
}

interface OrderContextType {
  order: OrderType[]
  quantityOrders: number
  preOrder: PreOrderType[]
  tax: number
  subTotalOrder: number
  total: number
  setItemsPreOrder: (preOrderData: PreOrderType) => void
  updateItemsPreOrder: (idItemPed: string, quantity: number) => void
  deleteItemPreOrder: (idItemPed: string) => void
  createNewOrder: (adress: CreateOrderAddressProps) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OderConstextProviderProps {
  children: React.ReactNode
}
export function OderContextProvider({ children }: OderConstextProviderProps) {
  const navigate = useNavigate()
  const [preOrder, setPreOrder] = useState<PreOrderType[]>([])
  const [order, setOrder] = useState<OrderType[]>([])
  const quantityOrders = order.length
  const tax = preOrder.length ? 3.5 : 0
  const subTotalOrder = preOrder.reduce((total, item) => {
    return total + item.subtotal
  }, 0)
  const total = subTotalOrder + tax

  function setItemsPreOrder(preOrderData: PreOrderType) {
    toast.success(`Adicionado: ${preOrderData.nameProduct}`)
    setPreOrder((state) => {
      return [...state, preOrderData]
    })
  }

  function updateItemsPreOrder(idItemPed: string, quantity: number) {
    const updatePreOrder = preOrder.map((item) => {
      if (item.idItensPed === idItemPed) {
        return {
          ...item,
          quantityProduct:
            item.quantityProduct + quantity < 1
              ? 1
              : item.quantityProduct + quantity,
          subtotal:
            item.quantityProduct + quantity > 1
              ? (item.quantityProduct + quantity) * item.priceProduct
              : item.priceProduct,
        }
      }
      return item
    })

    setPreOrder(updatePreOrder)
  }

  function deleteItemPreOrder(idItemPed: string) {
    if (idItemPed) {
      const filteredList = preOrder.filter((item) => {
        if (item.idItensPed !== idItemPed) {
          return {
            ...item,
          }
        }
        toast.warning(`Item removido: ${item.nameProduct}`)
        return false
      })

      setPreOrder(filteredList)
    }

    if (idItemPed === 'deleteAllItens') {
      if (preOrder.length > 0) {
        toast.error(`Todos os itens foram removidos`)
        setPreOrder([])
      }
    }
  }

  function createNewOrder(data: CreateOrderAddressProps) {
    const newOrder: OrderType = {
      idOrder: uuidv4(),
      itemsOrder: preOrder.map((item) => {
        return {
          idProduct: item.idProduct,
          nameProduct: item.nameProduct,
          quantity: item.quantityProduct,
          subtotal: item.subtotal,
        }
      }),
      address: data,
      payment: data.payment,
      dateOrder: new Date().toLocaleDateString(),
      statusOrder: 'pendente',
      totalOrder: total,
    }

    setOrder((state) => [...state, newOrder])
    setPreOrder([])
    toast.success('Pedido registrado com sucesso')
    navigate('/coffee/success')
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        quantityOrders,
        preOrder,
        tax,
        subTotalOrder,
        total,
        setItemsPreOrder,
        updateItemsPreOrder,
        deleteItemPreOrder,
        createNewOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

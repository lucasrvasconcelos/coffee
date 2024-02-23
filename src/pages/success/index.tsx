import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import entrega from '../../assets/images/entrega.svg'
import { useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'
import { Link } from 'react-router-dom'
import { renderSwitchPayment } from '../../utils/order'
import { GoToHome } from '../components/goToHome'

export function Success() {
  const { order, quantityOrders } = useContext(OrderContext)

  return (
    <main className="grid grid-cols-1 md:grid-cols-2  px-2 md:px-40 py-14 md:py-28 gap-x-24 gap-y-10 min-h-[100vh]">
      {quantityOrders ? (
        <div>
          <h1 className="text-3xl font-bold text-yellow_dark font-baloo">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-base_subtitle font-baloo font-semibold">
            Agora é só aguardar que Logo, logo o seu pedido chegará até você
          </p>
          <div className="rounded-md rounded-tr-3xl rounded-bl-3xl mt-10 flex flex-col items-start justify-center bg-background_gradient p-0.5">
            <ul className="rounded-md rounded-tr-3xl  rounded-bl-3xl p-10 flex flex-col items-start justify-center gap-8 bg-base_card h-full w-full">
              <li className="flex items-center justify-center gap-3">
                <div className="rounded-full bg-purple leading-none ">
                  <MapPin size={32} className="p-2 text-white" weight="fill" />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <span>
                    Entrega em
                    <strong className="ml-1 text-base_text font-bold font-baloo capitalize">
                      {order[quantityOrders - 1].address.rua},{' '}
                      {order[quantityOrders - 1].address.numero}
                    </strong>
                  </span>
                  <span className="capitalize font-baloo">
                    {order[quantityOrders - 1].address.bairro} -{' '}
                    {order[quantityOrders - 1].address.cidade},{' '}
                    {order[quantityOrders - 1].address.uf.toUpperCase()}
                  </span>
                </div>
              </li>

              <li className="flex items-center justify-center gap-3">
                <div className="rounded-full bg-yellow leading-none ">
                  <Timer size={32} className="p-2 text-white" weight="fill" />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <span>Previsão de entrega</span>
                  <span className="text-base_text font-bold font-baloo">
                    20 min - 30 min
                  </span>
                </div>
              </li>

              <li className="flex items-center justify-center gap-3">
                <div className="rounded-full bg-yellow_dark leading-none ">
                  <CurrencyDollar
                    size={32}
                    className="p-2 text-white"
                    weight="fill"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <span>Pagamento na entrega</span>
                  <span className="text-base_text font-bold font-baloo">
                    {renderSwitchPayment(order[quantityOrders - 1].payment)}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        false
      )}
      <div className="flex flex-col-reverse justify-stretch items-center py-10">
        <img
          src={entrega}
          alt="Imagem ilustrativa de uma pessoa em cima da moto fazendo entrega"
        />
      </div>
      {!quantityOrders ? (
        <div className="flex flex-col items-end justify-center gap-8 px-4">
          <span className="text-3xl font-baloo text-yellow_dark font-bold text-right">
            Não foi localizado pedidos para você
          </span>
          <Link
            to={'/'}
            className="py-2 px-4 bg-purple uppercase font-baloo font-bold text-white rounded-md hover:opacity-90"
          >
            Voltar para loja
          </Link>
        </div>
      ) : (
        <div className="flex gap-2">
          <Link
            to={'/orders'}
            className="flex-1 h-fit py-2 px-4 bg-yellow uppercase font-baloo font-bold text-white rounded-md hover:opacity-90 text-center"
          >
            Meus pedidos
          </Link>

          <GoToHome />
        </div>
      )}
    </main>
  )
}

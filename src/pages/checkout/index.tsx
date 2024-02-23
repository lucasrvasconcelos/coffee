import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { OrderContext } from '../../context/OrderContext'
import { ItemsCart } from '../components/ItemsCart'
import { TotalOrder } from '../components/TotalOrder'
import {
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Warning,
} from '@phosphor-icons/react'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const schemaValidate = zod.object({
  cep: zod.string().trim().min(8, 'Cep inválido').max(8, 'CEP Inválido'),
  rua: zod
    .string()
    .trim()
    .min(5, 'Endereço inválido')
    .max(50, 'Endereço inválido'),
  numero: zod
    .string()
    .trim()
    .min(1, 'Número inválido')
    .max(999999, 'Número inválido'),
  complemento: zod.string(),
  bairro: zod
    .string()
    .trim()
    .min(2, 'Bairro inválido')
    .max(15, 'Bairro inválido'),
  cidade: zod
    .string()
    .trim()
    .min(5, 'Cidade inválida')
    .max(15, 'Cidade inválida')
    .default('Fortaleza'),
  uf: zod.string().trim().min(2, 'inválido').max(2, 'inválido').default('CE'),
  payment: zod.string(),
})

export function CheckOut() {
  const {
    preOrder,
    tax,
    subTotalOrder,
    total,
    createNewOrder,
    quantityOrders,
  } = useContext(OrderContext)

  const existPreOrder = preOrder.length
  let valueTax = tax
  if (!existPreOrder) valueTax = 0
  const taxCurrency = valueTax.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
  const subTotalCurrency = subTotalOrder.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  type handleCreateNewCycleProps = zod.infer<typeof schemaValidate>

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<handleCreateNewCycleProps>({
    resolver: zodResolver(schemaValidate),
  })

  function handleCreateNewOrder(dados: handleCreateNewCycleProps) {
    createNewOrder(dados)
    reset()
  }

  const setPayment = errors?.payment?.type?.toString()

  return (
    <form
      className="grid grid-cols-1 xl:grid-cols-2 px-4 md:px-40 py-8 gap-8"
      onSubmit={handleSubmit(handleCreateNewOrder)}
    >
      <div>
        <h3 className="font-semibold font-baloo text-xl text-base_subtitle">
          Complete seu pedido...
        </h3>
        <section className=" bg-base_card rounded-md mt-4 pb-4">
          <div className="font-baloo p-8 py-6 flex items-start gap-1 justify-start">
            <MapPinLine size={22} className="text-yellow_dark mt-[2px]" />
            <div>
              <h2 className="font-baloo font-semibold text-base_subtitle text-xl">
                Endereço de entrega
              </h2>
              <p className="font-baloo text-base_text">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 outline-none border-none px-8 py-1 ">
            <div className="relative flex flex-col flex-1 max-w-48">
              <input
                type="text"
                id="cep"
                minLength={8}
                maxLength={8}
                placeholder="cep"
                {...register('cep')}
                className="outline-none bg-base_input text-base_text px-3 py-2 ring-1 rounded-md ring-slate-300"
              />
              <span className="absolute -top-[18px] lowercase left-1 text-xs animate-pulse text-red-500 font-bold">
                {errors?.cep?.message?.toString()}
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                id="rua"
                minLength={5}
                maxLength={50}
                placeholder="rua"
                {...register('rua')}
                className="outline-none bg-base_input text-base_text px-3 py-2 ring-1 rounded-md ring-slate-300 w-full"
              />
              <span className="absolute -top-[18px] lowercase left-1 text-xs animate-pulse text-red-500 font-bold">
                {errors?.rua?.message?.toString()}
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 w-full flex-col mobile:flex-row flex-1">
              <div className="relative w-full lg:w-fit">
                <input
                  type="text"
                  id="numero"
                  minLength={1}
                  maxLength={999999}
                  placeholder="numero"
                  {...register('numero')}
                  className="outline-none bg-base_input text-base_text px-3 py-2 ring-1 rounded-md ring-slate-300 lg:w-28 w-full"
                />
                <span className="absolute -top-[18px] lowercase left-1 text-xs animate-pulse text-red-500 font-bold">
                  {errors?.numero?.message?.toString()}
                </span>
              </div>
              <div className="relative w-full ">
                <input
                  type="text"
                  id="complemento"
                  placeholder="complemento (Opcional)"
                  {...register('complemento')}
                  className="outline-none bg-base_input text-base_text px-3 py-2 ring-1 rounded-md ring-slate-300 w-full"
                />
                <span className="absolute -top-[18px] lowercase left-1 text-xs animate-pulse text-red-500 font-bold">
                  {errors?.complemento?.message?.toString()}
                </span>
              </div>
            </div>

            <div className="flex items-start justify-center gap-5 w-full flex-col md:flex-row">
              <div className="relative w-full flex flex-col ">
                <input
                  type="text"
                  id="bairro"
                  placeholder="bairro"
                  {...register('bairro')}
                  className="outline-none bg-base_input text-base_text px-3 py-2 ring-1 rounded-md ring-slate-300 w-full "
                />
                <span className="absolute -top-[18px] lowercase left-1 text-xs animate-pulse text-red-500 font-bold">
                  {errors?.bairro?.message?.toString()}
                </span>
              </div>
              <div className="relative w-full flex flex-col">
                <input
                  type="text"
                  id="cidade"
                  placeholder="cidade"
                  {...register('cidade')}
                  className="outline-none bg-base_input text-base_text px-3 py-2 ring-1 rounded-md ring-slate-300 w-full"
                />
                <span className="absolute -top-[18px] lowercase left-1 text-xs animate-pulse text-red-500 font-bold">
                  {errors?.cidade?.message?.toString()}
                </span>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="uf"
                  placeholder="uf"
                  {...register('uf')}
                  className="outline-none bg-base_input text-base_text px-3 py-2 ring-1 rounded-md ring-slate-300 w-14"
                />
                <span className="absolute -top-[18px] lowercase left-1 text-xs animate-pulse text-red-500 font-bold">
                  {errors?.uf?.message?.toString()}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PAGAMENTO */}
        <section>
          <div className="bg-base_card rounded-md mt-4 px-8 py-10 relative">
            {setPayment === 'invalid_type' && (
              <div className="absolute -top-2 text-center left-0 w-full ">
                <span className="bg-purple_light px-0 lg:ml-20 lg:mr-20  py-2 rounded-md ring-1 ring-purple_dark text-purple_dark font-semibold flex justify-center items-center gap-1">
                  <Warning size={22} weight="fill" />
                  Não esqueça da forma de pagamento
                </span>
              </div>
            )}
            <div className="font-baloo">
              <div className="font-baloo  flex items-start gap-1 justify-start w-full">
                <CurrencyDollar size={22} className="text-purple mt-[2px]" />
                <div>
                  <h2 className="font-baloo font-semibold text-base_subtitle">
                    Pagamento
                  </h2>
                  <p className="font-baloo text-base_text">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </div>
            </div>

            <div className="flex mt-8 justify-center gap-2 flex-wrap">
              <div className="flex flex-1">
                <input
                  type="radio"
                  value="credito"
                  id="opt_01"
                  {...register('payment')}
                  className="peer/payment hidden"
                />
                <label
                  htmlFor="opt_01"
                  className="peer-checked/payment:bg-purple_light peer-checked/payment:ring-purple_dark ring-1 ring-transparent py-3 px-3
                rounded-md cursor-pointer uppercase font-roboto antialiased text-[11px] text-base_text bg-base_button flex justify-center items-center gap-1 leading-none flex-1 select-none"
                >
                  <CreditCard
                    size={22}
                    className="text-purple_dark mb-[0.5px]"
                  />
                  Cartão crédito
                </label>
              </div>

              <div className="flex flex-1">
                <input
                  type="radio"
                  value="debito"
                  id="opt_02"
                  {...register('payment')}
                  className="peer/payment hidden"
                />
                <label
                  htmlFor="opt_02"
                  className="peer-checked/payment:bg-purple_light peer-checked/payment:ring-purple_dark ring-1 ring-transparent py-3 px-3
                rounded-md cursor-pointer uppercase font-roboto antialiased text-[11px] text-base_text bg-base_button flex justify-center items-center gap-1 leading-none flex-1 select-none"
                >
                  <CreditCard
                    size={22}
                    className="text-purple_dark mb-[0.5px]"
                  />
                  Cartão Débito
                </label>
              </div>

              <div className="flex flex-1">
                <input
                  type="radio"
                  value="dinheiro"
                  id="opt_03"
                  {...register('payment')}
                  className="peer/payment hidden"
                />
                <label
                  htmlFor="opt_03"
                  className="peer-checked/payment:bg-purple_light peer-checked/payment:ring-purple_dark ring-1 ring-transparent py-3 px-3
                rounded-md cursor-pointer uppercase font-roboto antialiased text-[11px] text-base_text bg-base_button flex justify-center items-center gap-1 leading-none flex-1 select-none"
                >
                  <Money size={22} className="text-purple_dark mb-[0.5px]" />
                  Dinheiro
                </label>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <h3 className="font-semibold  font-baloo text-xl text-base_subtitle">
          Produtos selecionados
        </h3>
        <section className="p-4 md:p-8 bg-base_card rounded-md mt-4 relative">
          {existPreOrder ? (
            <ul className="overflow-auto max-h-[50vh] list-none flex flex-col">
              <ItemsCart
                className={'w-[100%] h-[200px] rounded overflow-hidden pr-4'}
              />
            </ul>
          ) : (
            <div>
              {quantityOrders ? (
                <Link
                  to={'/orders'}
                  className="font-roboto hover:opacity-90 flex justify-center items-center text-lg uppercase font-bold py-1 text-white bg-yellow ring-1 ring-yellow rounded-md"
                >
                  Meus pedidos
                </Link>
              ) : (
                <span className="font-baloo flex justify-center items-center text-lg bg-transparent py-1 rounded-md text-base_title">
                  Ainda não foi adicionado itens ao carrinho
                </span>
              )}
            </div>
          )}

          <div className="p-2 mt-4 relative flex flex-col">
            <span className="font-baloo font-semibold">
              Total de itens:
              <strong className="ml-2 text-yellow_dark">{existPreOrder}</strong>
            </span>
            <span className="font-baloo font-semibold">
              SubTotal:
              <strong className="ml-2 text-yellow_dark">
                {subTotalCurrency}
              </strong>
            </span>
            <span className="font-baloo font-semibold">
              Entrega:
              <strong className="ml-2 text-yellow_dark">{taxCurrency}</strong>
            </span>
            <TotalOrder
              sumOrder={total}
              className={
                'absolute bottom-0 right-8 font-semibold font-baloo text-xl flex flex-col text-yellow_dark'
              }
            />
          </div>
          {existPreOrder ? (
            <button
              type="submit"
              className=" flex items-center justify-center w-full mt-4 py-3 rounded-md bg-yellow text-white uppercase font-bold font-roboto hover:opacity-90"
            >
              Confirmar pedido
            </button>
          ) : (
            false
          )}
          <Link
            to={'/'}
            className="flex items-center justify-center w-full mt-4 py-3 rounded-md bg-purple text-white uppercase font-bold font-roboto hover:opacity-90"
          >
            Voltar para seleção de itens
          </Link>
        </section>
      </div>
    </form>
  )
}

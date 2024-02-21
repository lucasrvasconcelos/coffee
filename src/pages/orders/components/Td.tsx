interface TdProps {
  children: React.ReactNode
  className?: string
  status?: 'pendente' | 'aceito' | 'concluido' | 'cancelado' | string
}
export function Td({ children, status, ...rest }: TdProps) {
  function switchStatus() {
    switch (status) {
      case 'pendente':
        return (
          <td className="px-[18px] capitalize text-yellow_dark font-bold relative">
            Pendente
            <span className="absolute top-[50%] left-1 -translate-y-[50%] size-2 bg-yellow rounded-full" />
          </td>
        )
      case 'aceito':
        return (
          <td className="px-[18px] capitalize text-blue-500 font-bold relative">
            Em preparo
            <span className="absolute top-[50%] left-1 -translate-y-[50%] size-2 bg-blue-500 rounded-full" />
          </td>
        )
      case 'concluido':
        return (
          <td className="px-[18px] capitalize text-green-500 font-bold relative">
            A caminho
            <span className="absolute top-[50%] left-1 -translate-y-[50%] size-2 bg-green-500 rounded-full" />
          </td>
        )
      case 'cancelado':
        return (
          <td className="px-[18px] capitalize text-red-500 font-bold relative">
            Cancelada
            <span className="absolute top-[50%] left-1 -translate-y-[50%] size-2 bg-red-500  rounded-full" />
          </td>
        )
    }
  }
  return (
    <>
      {status ? (
        switchStatus()
      ) : (
        <td className="px-[18px] capitalize " {...rest}>
          {children}
        </td>
      )}
    </>
  )
}

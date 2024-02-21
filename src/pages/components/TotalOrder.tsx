import { currency } from '../../utils/order'

interface TotalOrderProps {
  sumOrder: number
  className?: string
}
export function TotalOrder({ sumOrder, ...rest }: TotalOrderProps) {
  return (
    <span
      className="absolute bottom-4 left-8 font-semibold font-baloo text-2xl flex flex-col text-yellow_dark"
      {...rest}
    >
      <span className="font-normal text-base_text -mb-2">Total</span>
      {currency(sumOrder)}
    </span>
  )
}

import { Th } from './Th'

export function TrHeader() {
  return (
    <tr className="table-fixed text-sm">
      <Th>N° pedido</Th>
      <Th>Total</Th>
      <Th>F. Pagamento</Th>
      <Th>Itens</Th>
      <Th>Endereço</Th>
      <Th>Data</Th>
      <Th>Status</Th>
    </tr>
  )
}

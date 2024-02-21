interface ThProps {
  children: React.ReactNode
  className?: string
}
export function Th({ children, ...rest }: ThProps) {
  return (
    <th className="p-[18px] uppercase font-baloo text-sm" {...rest}>
      {children}
    </th>
  )
}

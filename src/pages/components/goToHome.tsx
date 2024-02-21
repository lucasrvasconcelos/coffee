import { Link } from 'react-router-dom'

interface GoToHomeProps {
  className?: string
}
export function GoToHome({ className, ...res }: GoToHomeProps) {
  return (
    <Link
      to={'/coffee/'}
      className={
        className ||
        'flex-1 h-fit py-2 px-4 bg-purple uppercase font-baloo font-bold text-white rounded-md hover:opacity-90 text-center'
      }
      {...res}
    >
      Voltar para loja
    </Link>
  )
}

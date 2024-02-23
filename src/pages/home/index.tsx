import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import banner from '../../assets/images/coffe-banner.png'
import { Card } from '../components/Card'

export function Home() {
  const products = [
    {
      id: 1,
      image: 'images/tradicional.png',
      type: ['tradicional', 'com leite'],
      title: 'Expresso Tradicional',
      price: 9.9,
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      id: 2,
      image: 'images/americano.png',
      type: ['tradicional'],
      title: 'Expresso Americano',
      price: 9.9,
      description: 'Expresso diluído, menos intenso que o tradicional',
    },
    {
      id: 3,
      image: 'images/expresso-cremoso.png',
      type: ['tradicional'],
      title: 'Expresso Cremoso',
      price: 9.9,
      description: 'Café expresso tradicional com espuma cremosa',
    },
    {
      id: 4,
      image: 'images/expresso-gelado.png',
      type: ['tradicional', 'gelado'],
      title: 'Expresso Gelado',
      price: 9.9,
      description: 'Bebida preparada com café expresso e cubos de gelo',
    },
    {
      id: 5,
      image: 'images/cafe-com-leite.png',
      type: ['tradicional', 'com leite'],
      title: 'Café com Leite',
      price: 9.9,
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
    },
    {
      id: 6,
      image: 'images/latte.png',
      type: ['tradicional', 'com leite'],
      title: 'Latte',
      price: 9.9,
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    },
    {
      id: 7,
      image: 'images/capuccino.png',
      type: ['tradicional', 'com leite'],
      title: 'Capuccino',
      price: 9.9,
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
    },
    {
      id: 8,
      image: 'images/macchiato.png',
      type: ['tradicional', 'com leite'],
      title: 'Macchiato',
      price: 9.9,
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
    },
    {
      id: 9,
      image: 'images/mocaccino.png',
      type: ['tradicional', 'com leite'],
      title: 'Mocaccino',
      price: 9.9,
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    },
    {
      id: 10,
      image: 'images/chocolate-quente.png',
      type: ['especial', 'com leite'],
      title: 'Chocolate Quente',
      price: 9.9,
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
    },
    {
      id: 11,
      image: 'images/cubano.png',
      type: ['especial', 'alcoólico', 'gelado'],
      title: 'Cubano',
      price: 9.9,
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
    },
    {
      id: 12,
      image: 'images/havaiano.png',
      type: ['especial'],
      title: 'Havaiano',
      price: 9.9,
      description: 'Bebida adocicada preparada com café e leite de coco',
    },
    {
      id: 13,
      image: 'images/arabe.png',
      type: ['especial'],
      title: 'Árabe',
      price: 9.9,
      description: 'Bebida preparada com grãos de café árabe e especiarias',
    },
    {
      id: 14,
      image: 'images/irlandes.png',
      type: ['especial', 'alcoólico'],
      title: 'Irlandês',
      price: 9.9,
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    },
  ]

  return (
    <main className="px-8 md:px-24 relative">
      <div className="flex items-center lg:items-start flex-col-reverse justify-center gap-8 lg:flex-row lg:gap-14 pt-[12rem] pb-24">
        <div>
          <h1 className="font-baloo font-bold text-5xl text-base_title">
            Encontre o café perfeito <br />
            para qualquer hora do dia
          </h1>
          <p className="mt-4 font-baloo text-base_subtitle text-[1.2rem] max-w-[450px]">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora !
          </p>

          <ul className="list-none grid grid-cols-1 sm:grid-cols-2 gap-5 mt-14 text-base_text">
            <li className="flex justify-center items-center w-fit gap-3">
              <ShoppingCart
                size={24}
                className="text-background box-content p-2 leading-none rounded-full bg-yellow_dark"
                weight="fill"
              />
              <span>Compra simples e segura</span>
            </li>

            <li className="flex justify-center items-center w-fit gap-3">
              <Package
                size={24}
                className="text-background box-content p-2 leading-none rounded-full bg-base_text "
                weight="fill"
              />
              <span>Embalagem mantém o café intacto</span>
            </li>

            <li className="flex justify-center items-center w-fit gap-3">
              <Timer
                size={24}
                className="text-background box-content p-2 leading-none rounded-full bg-yellow"
                weight="fill"
              />
              <span>Entrega rápida e rastreada</span>
            </li>

            <li className="flex justify-center items-center w-fit gap-3">
              <Coffee
                size={24}
                className="text-background box-content p-2 leading-none rounded-full bg-purple"
                weight="fill"
              />
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </div>
        <div>
          <img src={banner} alt="Imagem café" className="lg:flex" />
        </div>
      </div>

      <div className="flex flex-col gap-20 py-11">
        <h2 className="text-4xl font-bold font-baloo">Nossos cafés</h2>
        <div className="flex gap-4 flex-wrap justify-center items-center gap-y-10">
          {products.map((product) => {
            return <Card key={product.id} product={product} />
          })}
        </div>
      </div>
    </main>
  )
}

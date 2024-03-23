import { Button } from '@/components/ui/button'
import { Input } from '@/shared/input'
import { CalendarClock, ChevronRight, Clock, FileStack, Search, TreePalm, TrendingUp, WalletCards } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const mostAccessed = [
  {
    label: "Espelho de ponto",
    icon: <CalendarClock />,
    path: "/espelho-de-ponto"
  },
  {
    label: "Envelope de pagamento",
    icon: <WalletCards />,
    path: "/envelope-de-pagamento"
  },
  {
    label: "Bater ponto",
    icon: <Clock />,
    path: "/bater-ponto"
  },
  {
    label: "Histórico salarial",
    icon: <FileStack />,
    path: "/historico-salarial"
  },
  {
    label: "Informe de rendimentos",
    icon: <TrendingUp />,
    path: "/informe-de-rendimentos"
  },
  {
    label: "Férias",
    icon: <TreePalm />,
    path: "/ferias"
  }
]

export const Home: React.FC = () => {
  return (
    <section className='px-7'>
      <Input Icon={Search} placeholder="Buscar colaborador" />
      <h2 className="font-semibold text-xl text-primary mt-7 mb-3">Mais acessados</h2>

      <main className='space-y-1'>
        {mostAccessed.map((item, index) => (
          <Button key={index} asChild className='flex justify-between items-center w-full h-[70px] px-5 bg-primary-aux hover:bg-primary-aux-accent text-white/70 hover:text-white text-base font-normal'>
            <Link to={item.path}>
              <div className='flex items-center gap-5'>
                {item.icon}
                <span>{item.label}</span>
              </div>
              <ChevronRight />
            </Link>
          </Button>
        ))}
      </main>
    </section>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'
import {
  RiBriefCase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri'

import DevImage from './DevImage'
import Badge from './Badge'
import Socials from './Socials'

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Desenvolvedor de Software
            </div>
            <h1 className="h1 mb-4">Olá, me chamo Robson</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0    ">
              Breve descrição com insights sobre mim, minha jornada vocacional e
              o que faço profissionalmente.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Vamos conversar ? <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Baixar CV <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <div className="w-[510px] h-[470px] relative">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary">
                <Image
                  style={{ clipPath: 'url(#blobClipPath)' }}
                  src="/assets/hero/logo.png"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  alt="dev image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
        <RiArrowDownSLine className="text-3xl text-primary" />
      </div>
    </section>
  )
}

export default Hero

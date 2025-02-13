
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { TiThMenu } from "react-icons/ti";
import Link from 'next/link';
const SHEET_SIDES = [ "right"] as const

// type SheetSide = (typeof SHEET_SIDES)[number]

const Hamburguer = () => {
  console.log("sheet", SHEET_SIDES)
  return (
    <div className='gap-2'>
        {SHEET_SIDES.map((side) => (
              <Sheet key={side}>
                  <SheetTitle className='hidden' />
                  <SheetTrigger asChild className='lg:hidden'>
                      <TiThMenu className='text-2xl' />
                  </SheetTrigger>
                  <SheetContent side={side}>
                    <SheetHeader>

                    </SheetHeader>
                    <ul>
                      <li className='grid grid-cols-1 space-y-5 place-items-start'>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/products'}>Produtos</Link>
                        <Link href={'/brands'}>Marcas</Link>
                      </li>
                    </ul>
                  </SheetContent>
              </Sheet>
        ))}
    </div>
  )
}

export default Hamburguer
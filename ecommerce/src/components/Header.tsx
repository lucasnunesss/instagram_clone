import Link from "next/link"
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import Hamburguer from "./Hamburguer";
const Header = () => {
  return (
    <header className="w-full fixed bg-white z-10 top-0 h-[60px] md:h-[90px] flex justify-between pr-2 items-center max-w-screen-2xl mx-auto">
      <div className="flex justify-center items-center">

        <h1 className="text-2xl md:text-4xl font-extrabold pl-2">Loja Virtual</h1>


      </div>
      <ul className="hidden lg:block">
          <li className="flex space-x-4 ml-4 mt-2 items-center">
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>Produtos</Link>
            <Link href={"/brands"}>Marcas</Link>
          </li>

        </ul>

        <div className="ml-14 flex justify-center items-center">
            <div className="flex justify-start items-center lg:bg-[#F0F0F0] lg:w-[500px] h-[40px] pl-2 ml-12 md:ml-0 hover:border-none rounded-full">
              <IoIosSearch className="text-xl hidden lg:block" />
              <input placeholder={`Procurar produtos...`} className="bg-[#F0F0F0] outline-none w-full h-full rounded-full ml-2 hidden lg:block" />          
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <Link href={"/cart"} className="relative hidden lg:block">
                <IoCartOutline className="text-4xl" />
              </Link>
              <MdOutlineAccountCircle className="text-4xl hidden lg:block" />
            </div>

            <div className="flex items-center justify-center space-x-5 lg:hidden">
              <Link href={"/cart"} className="relative">
              
                <IoCartOutline className="text-4xl" />
              </Link>
              <Hamburguer />
            </div>
        </div>
    </header>
  )
}

export default Header
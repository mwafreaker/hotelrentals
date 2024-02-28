import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi"
import { FaArrowRight  } from "react-icons/fa"

export default function Home() {

  function handleBurgerClick() {
      console.log("burger clicked");
  }
  return (
    <div className="min-h-screen">
      <section>
        <div className="flex flex-row justify-between px-10 py-4 pt-8">
          <strong>Logo</strong>
          <ul className="sm:flex flex-row gap-4 text-sm text-sky-600 hidden">
            <li>Home</li>
            <li>Pricing</li>
            <li>Rent Hotel</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <GiHamburgerMenu className="sm:hidden cursor-pointer" onClick={handleBurgerClick} />
        </div>
      </section>

      <section className="flex flex-col pl-8 pt-96 h-3/5 gap-4 align-bottom">
        <div className="flex flex-row">
          <div className="flex flex-col gap-1 w-3/4">
          <p className="text-3xl flex flex-col justify-center align-middle font-semibold">
            Book your hotel with us
          </p>
          <span className="text-xs text-gray-700">
            Find vacation rentals, cabins,beach houses, unique homes and experiences around the world. 
          </span>
          </div>
        </div>

        

        <div className="flex gap-2 align-middle h-min">
        <div className="flex justify-center align-middle rounded-full bg-slate-500 w-min h-min p-1.5">
          <FaArrowRight className="text-sm"/>
        </div>
        <p className="flex align-text-bottom">Let's start</p>
        </div>
      </section>

      <section>
        <p></p>
      </section>
    </div>
  );
}

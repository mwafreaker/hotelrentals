import { FaArrowRight  } from "react-icons/fa"
import Header from "./components/header/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section>
        <Header />
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

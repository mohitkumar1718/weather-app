import { useContext } from "react"
import { DataContext } from "../utils/context"


export const Showtemp = () => {
    const{name,temp,humidity}=useContext(DataContext);
  return (
    <div className="mx-auto text-center mt-20">
    <h1 className="text-4xl font-bold text-stone-700 opacity-90 ">{name}</h1>
    <h1 className="text-9xl font-bold ">{((temp-32)/(1.8)).toFixed(0) }°C</h1>
    <h1 className="text-4xl font-semibold">{humidity}</h1>
    </div>
  )
}

import { ChangeEvent } from "react"

interface InputProps{
    type:string,
    placeholder:string,
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
const Input:React.FC<InputProps> = ({type, placeholder, onChange})=>{
    return <>
        <input dir="rtl" type={type} placeholder={placeholder} onChange={onChange} className="w-full px-3 py-2 outline-none rounded-xl" />
    </>
}
export default Input
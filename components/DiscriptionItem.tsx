interface DescriptionItemProps{
    label:string,
    status:string,
    color:string,
}
const DescriptionItem:React.FC<DescriptionItemProps> = ({label, status ,color})=>{
    return <div className="flex gap-3 space-y-3 justify-end items-center">
        <p className={`${status==='کمبود وزن' ? 'text-yellow-400 ' : status==='نرمال' ? 'text-green-500' : 'text-red-500'}`}>{status}</p>
        <p>{label}</p>
        <div className={`w-5 h-5 rounded-full ${status==='کمبود وزن' ? 'bg-yellow-400 ' : status==='نرمال' ? 'bg-green-500' : 'bg-red-500'}`}></div>
    </div>
}
export default DescriptionItem
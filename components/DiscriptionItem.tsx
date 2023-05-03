interface DescriptionItemProps{
    label:string,
    status:string,
    color:string,
}
const DescriptionItem:React.FC<DescriptionItemProps> = ({label, status ,color})=>{
    return <div className="flex gap-3 justify-end items-center">
        <p>{status}</p>
        <p>{label}</p>
        <div className={`w-5 h-5 bg-${color} rounded-full`}></div>
    </div>
}
export default DescriptionItem
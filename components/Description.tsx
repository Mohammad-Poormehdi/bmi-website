import DescriptionItem from "./DiscriptionItem"

const description_item ={

}
const Description = ()=>{
    return <div className="w-full bg-white p-5 rounded-xl shadow-lg">
        <DescriptionItem label=" : زیر 18" status="کمبود وزن" color="yellow-500" />
        <DescriptionItem label=" : بین 18 تا 25 " status="نرمال" color="green-500" />
        <DescriptionItem label=" : بین 26 تا 30 " status="اضافه وزن" color="red-500" />
    </div>
}
export default Description
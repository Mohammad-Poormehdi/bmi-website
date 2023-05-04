import DescriptionItem from "./DiscriptionItem"

const description_item ={

}
const Description = ()=>{
    return <div className="w-full bg-white p-5 rounded-xl shadow-lg">
        <DescriptionItem label=" : زیر 18" status="کمبود وزن" />
        <DescriptionItem label=" : بین 18 تا 25 " status="نرمال"  />
        <DescriptionItem label=" : بین 26 تا 30 " status="اضافه وزن"  />
        <DescriptionItem label=" : بین 30 تا 35 " status="چاقی"  />
        <DescriptionItem label=" : بالا تر از 35" status="چاقی شدید"  />
    </div>
}
export default Description
import Button from "@/components/Button"
import { useRouter } from "next/router"

const Home = ()=>{
    const router = useRouter()
    return <>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] p-10 mx-auto space-y-6">
                <h1 dir="rtl" className="text-4xl font-bold text-center ">به وبسایت HaDi BiGdEli خوش آمدید</h1>
                <Button label="ورود به صفحه محاسبه BMI" active onClick={()=>router.push('/bmi')} />
            </div>
        </div>
    </>
}
export default Home
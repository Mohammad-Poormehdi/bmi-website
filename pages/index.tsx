import Button from "@/components/Button";
import Description from "@/components/Description";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import Power from "@/components/Speedometer";
const Home = () => {
  return (
    <>
      <div className="absolute inset-0 ">
        <Navbar />
        <div className="flex justify-center items-center h-full">
          <div className="max-w-2xl bg-slate-100 rounded-2xl shadow-lg mx-auto p-5">
            <div className="grid grid-cols-2 grid-rows-2 gap-5">
              <Input placeholder="قد" type="number" onChange={() => {}} />
              <Input placeholder="سن" type="number" onChange={() => {}} />
              <Input placeholder="وزن" type="number" onChange={() => {}} />
              <div className="w-full bg-white rounded-full flex">
                <Button label="مرد" active onClick={() => {}} />
                <Button label="زن" onClick={() => {}} />
              </div>
              <div className="col-span-2">
                <Button label="محاسبه" onClick={() => {}} active />
              </div>
            </div>
            {/* speedometer */}
            <div className="h-[300px] space-y-4 flex flex-col justify-center items-center ">
              <Power value={20} />
              
              <h1 className="text-center font-bold text-3xl">
                18.5
              </h1>
              <h1 className="text-center text-green-500 font-bold text-3xl">
                نرمال
              </h1>
            </div>
            <Description />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;

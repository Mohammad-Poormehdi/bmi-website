import Button from "@/components/Button";
import Description from "@/components/Description";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import Power from "@/components/Speedometer";
import cuid from "cuid";
import { ChangeEvent, useState } from "react";
const buttons = [
  { id: cuid(), label: "مرد" },
  { id: cuid(), label: "زن" },
];
const Home = () => {
  const [activeButton, setActiveButton] = useState("مرد");
  const handleActive = (label: string) => {
    setActiveButton(label);
  };
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const handleHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(event.currentTarget.value));
  };
  const handleWeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.currentTarget.value));
  };
  const [BMI, setBMI] = useState(0);
  const [status, setStatus] = useState("");
  const onCalculate = () => {
    let result = weight / (height / 100) ** 2;
    setBMI(Number(result.toFixed(2)));
    if (!height || !weight) {
      setStatus("لطفا اطلاعات را وارد کنید");
      return;
    }
    if (result < 18.5) {
      setStatus("کمبود وزن");
    } else if (result > 18.5 && result < 25) {
      setStatus("نرمال");
    } else if (Number.isNaN(result)) {
      setStatus("لطفا اطلاعات را وارد کنید");
    } else {
      setStatus("اضافه وزن");
    }
  };
  return (
    <>
      <div className="absolute inset-0 ">
        <Navbar />
        <div className="flex justify-center items-center h-full max-md:block">
          <div className="max-w-2xl bg-slate-100 rounded-2xl shadow-lg mx-auto p-5">
            <div className="grid grid-cols-2 grid-rows-2 gap-5">
              <Input
                placeholder="قد"
                type="number"
                onChange={handleHeightChange}
              />
              <Input placeholder="سن" type="number" onChange={() => {}} />
              <Input
                placeholder="وزن"
                type="number"
                onChange={handleWeightChange}
              />
              <div className="w-full bg-white rounded-full flex">
                {buttons.map((button) => (
                  <Button
                  key={button.id}
                    label={button.label}
                    active={activeButton === button.label}
                    onClick={() => handleActive(button.label)}
                  />
                ))}
              </div>
              <div className="col-span-2">
                <Button label="محاسبه" onClick={onCalculate} active />
              </div>
            </div>
            {/* speedometer */}
            <div className="h-[300px] space-y-4 flex flex-col justify-center items-center ">
              <Power value={BMI} />

              <h1 className="text-center font-bold text-3xl">{BMI}</h1>
              <h1
                className={`text-center ${
                  status === "کمبود وزن"
                    ? "text-yellow-500"
                    : status === "نرمال"
                    ? "text-green-500"
                    : "text-red-500"
                } font-bold text-3xl`}
              >
                {status}
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

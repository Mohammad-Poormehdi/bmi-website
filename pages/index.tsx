import Button from "@/components/Button";
import Head from "next/head";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>HaDi BiGdEli</title>
        <meta name="description" content="سایت هادی بیگدلی" />
      </Head>
      <div className="absolute inset-0 flex items-center  justify-center">
        <div className="space-y-32">
          <div className="w-[600px] p-10 mx-auto space-y-6 ">
            <h1 dir="rtl" className="text-4xl font-bold text-center ">
              به سایت
            </h1>
            <h1 dir="rtl" className="text-4xl font-bold text-center ">
              HaDi BiGdEli
            </h1>
            <h1 dir="rtl" className="text-4xl font-bold text-center ">
              خوش آمدید
            </h1>
          </div>
          <Button
            label="محاسبه شاخص توده بدنی"
            active
            onClick={() => router.push("/bmi")}
          />
        </div>
      </div>
    </>
  );
};
export default Home;

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
      <div className=" py-40">
        <div className="text-center max-w-2xl mx-auto font-bold space-y-20 px-10 ">
          <div className="text-4xl space-y-3">
            <p>به سایت</p>
            <p>Hadi BiGdEli</p>
            <p>خوش آمدید</p>
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

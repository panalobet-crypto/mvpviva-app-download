import Image from "next/image";
import Link from "next/link";
import Download from "@/components/download";

export default function Home() {
  return (
    <div>
      {/* mobile */}
      <div className="py-4 md:hidden">
        <h1 className="text-white uppercase font-[900] text-xl text-center">
          Download the mvpviva app onto your phone today
        </h1>
        <p className="mt-2 text-[#ffeb9e] text-md italic text-center font-bold uppercase">
          download now and enjoy
        </p>
      </div>
      {/* web */}
      <div className="hidden my-10 md:block">
        <h1 className="text-white uppercase font-[900] text-[38px]/10 text-center">
          Download our mvpviva mobile app today
        </h1>
        <p className="mt-2 text-3xl text-[#ffeb9e] text-md italic text-center font-bold uppercase">
          experience the thrill with mvpviva!
        </p>
      </div>
      <Download />
      <div className="hidden max-w-[1230px] mx-auto mt-10 md:px-5 md:block">
        <div className="flex items-center justify-center gap-10">
          <div className="">
            <Image
              src="/img/MVPVIVA_JOIN.png"
              width={300}
              height={300}
              alt="Join now"
              className=""
            />
          </div>
          <div className="w-[50%] text-white text-center">
            <p className="font-bold text-[26px] text-pretty mb-5">
              Join Millions of Players and enjoy endless array of games that we
              offer at your fingertips!
            </p>
            <p className="font-bold text-[26px] text-pretty">
              Exciting rewards everyday! Play for fun and win bing.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-[#ffeb9e] text-center uppercase text-[36px]/10 font-[900] text-pretty">
            download mvpviva mobile app now and start playing today!
          </h2>
          <div className="flex items-center justify-center mt-15 gap-10">
            <div className="flex flex-col items-center">
              <Image
                src="/img/QR_Android.png"
                width={300}
                height={300}
                alt="QR Android"
                className="mb-5"
              />
              <Link href="https://www.goglekhplaystore.com/3552958708/3552958708_download.html?index=TT9pVbeq&tplhx=1&link_id=L2508193655155921683980169410">
                <Image
                  src="/img/button_android2.png"
                  width={400}
                  height={130}
                  alt="Step 3"
                  // sizes="100vw"
                  // style={{ width: "100%", height: "auto" }}
                />
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/img/new-ios-qr-code-2026.png"
                width={300}
                height={300}
                alt="QR Android"
                className="mb-5 rounded-xl border-4 border-yellow-400"
              />
              <Link href="https://mvpviva.app/WQoeNp">
                <Image
                  src="/img/button_IOS2.png"
                  width={400}
                  height={130}
                  alt="Step 3"
                  // sizes="100vw"
                  // style={{ width: "100%", height: "auto" }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center pb-10">
          <Image
            src="/img/websitelower_EN.png"
            width={0}
            height={0}
            alt="Step 3"
            sizes="100vw"
            style={{ width: "85%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

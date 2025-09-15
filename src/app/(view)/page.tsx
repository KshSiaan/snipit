import Banner from "@/components/banner";
import DigitalClock from "@/components/digital-clock";
import { Card } from "pixel-retroui";
import React, { Suspense } from "react";
import Summerizer from "./summerizer";
import { SpinnerBlock } from "@/components/ui/loader";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-dvh w-dvw bg-pink-100 p-6">
      <div className="w-full lg:grid lg:grid-cols-8 gap-6 space-y-6 h-full lg:items-stretch">
        <div className="w-full h-min ">
          <Suspense>
            <Banner />
          </Suspense>
        </div>
        <div className="w-full mx-auto lg:col-span-6 h-[60dvh] lg:h-full flex">
          <Card className="flex-1 flex flex-col justify-start items-start p-2! gap-6">
            <Link
              prefetch={false}
              href={`https://www.geeky-gadgets.com/grok-4-2-sonoma-sky/`}
              className="text-end ml-auto flex items-center gap-2 justify-end hover:underline!"
            >
              Powered by: Sonoma Sky Alpha
            </Link>
            <Suspense
              fallback={
                <div className="h-full w-full flex justify-center items-center">
                  <SpinnerBlock className="size-24 text-pink-300" />
                </div>
              }
            >
              <Summerizer />
            </Suspense>
          </Card>
        </div>
        <Suspense>
          <DigitalClock />
        </Suspense>
      </div>
    </main>
  );
}

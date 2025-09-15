"use client";
import { SpinnerBlock } from "@/components/ui/loader";
import Image from "next/image";
import { Button, Card, TextArea } from "pixel-retroui";
import React, { useState } from "react";
import { toast } from "sonner";

export default function Summerizer() {
  const [article, setArticle] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const submitter = async () => {
    setLoading(true);
    const call = await fetch("/api/sum", {
      method: "POST",
      body: JSON.stringify({ article }),
    });

    const res: { ok: boolean; data: string } = await call.json();

    if (!call.ok) {
      toast.error(res.data);
      return;
    }
    setLoading(false);
    setResult(res.data);
  };
  return (
    <>
      {loading ? (
        <div className="h-full w-full flex justify-center items-center">
          <SpinnerBlock className="size-24 text-pink-300" />
        </div>
      ) : result ? (
        <Card className="flex-1 flex flex-col p-2! gap-2 min-w-[99%]">
          <Card className="h-12 flex items-center justify-between">
            <Button
              className="size-6 flex justify-center items-center"
              onClick={() => {
                setLoading(true);
                setArticle("");
                setResult(null);
                setLoading(false);
              }}
            >
              &lt;
            </Button>
            <Button
              className="text-xs h-6 flex justify-center items-center px-2"
              onClick={() => {
                navigator.clipboard.writeText(result);
              }}
            >
              Copy
            </Button>
          </Card>
          <Card className="flex-1">
            <article>{result}</article>
          </Card>
        </Card>
      ) : (
        <TextArea
          className="flex-1"
          bg="#efefef"
          value={article}
          onChange={(e) => {
            setArticle(e.target.value);
          }}
          placeholder="Type here.."
        />
      )}
      <div className="flex justify-end w-full items-center">
        <div className="flex-1">
          <p className="text-zinc-400! hover:text-foreground transition-colors cursor-help flex gap-2">
            <Image
              src={"/info.svg"}
              height={64}
              width={64}
              alt="info"
              draggable={false}
              className="size-6 text-zinc-400!"
            />
            Type your text and click the summerize button!
          </p>
        </div>
        <Button onClick={submitter} disabled={!!result}>
          Summerize it!
        </Button>
      </div>
    </>
  );
}

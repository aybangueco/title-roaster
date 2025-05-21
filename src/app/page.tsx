"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { actionRoastTitle } from "./actions";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [title, setTitle] = useState<string>("");
  const [roastResult, setRoastResult] = useState<string>("");
  const [isRoasting, setIsRoasting] = useState<boolean>(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSubmitTitle = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsRoasting(true);

    try {
      const { ok, data } = await actionRoastTitle(title);

      if (ok) {
        setRoastResult(data as string);
        return;
      }
    } catch (error) {
      console.error(error);
      alert("Error roasting title");
    } finally {
      setTitle("");
      setIsRoasting(false);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center mt-12 gap-3 p-3">
      {roastResult.length > 0 && (
        <section className="max-w-[40rem] bg-accent p-3 rounded-md whitespace-pre-line">
          <ReactMarkdown>{roastResult}</ReactMarkdown>
        </section>
      )}
      <section className="flex justify-center items-center max-w-[40rem] w-full">
        <form
          onSubmit={onSubmitTitle}
          className="flex w-full flex-col gap-3 p-3"
          method="post"
        >
          <Input
            disabled={isRoasting}
            onChange={handleTitleChange}
            placeholder="Enter your thesis/capstone title"
            value={title}
          />
          <Button
            disabled={title.length < 1 || isRoasting}
            className="w-full"
            type="submit"
          >
            {isRoasting ? "Roasting..." : "Roast This Title!"}
          </Button>
        </form>
      </section>
    </main>
  );
}

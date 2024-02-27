"use client";

import { useChat } from "ai/react";
import React, { FormEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import SelectCharacter from "@/components/selectCharacter";

export default function Chat() {
  const [apiUrl, setApiUrl] = useState<string>("/api/openai");
  const [selectedModel, setSelectedModel] = useState("GPT-3.5"); // New state for selected model

  const handleSelectCharacterChange = (selectedOption: string) => {
    let newUrl = "/api/openai"; // Default URL
    switch (selectedOption) {
      case "GPT-3.5":
        newUrl = "/api/openai";
        break;
      case "mistral-7b-instruct":
        newUrl = "/api/mistral";
        break;
      case "sonar-small-chat":
        newUrl = "/api/sonar";
        break;
      // Add more cases for other models if needed
      default:
        newUrl = "/api/openai"; // Default to openai
        break;
    }
    setApiUrl(newUrl);
    setSelectedModel(selectedOption);
  };

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: apiUrl,
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent the default behavior (e.g., adding a newline)
      // @ts-ignore
      handleSubmit(e); // cast e to the expected type
    }
  };
  return (
    <div className="flex w-full flex-none flex-col  ">
      <div className="min-w-xl w-full   max-w-full flex-col scroll-auto py-24 ">
        <div className="fixed top-0  mx-auto w-full max-w-lg bg-slate-900  py-2 ">
          <SelectCharacter onValueChange={handleSelectCharacterChange} />
        </div>
        {messages.map((m) => (
          <div className="w-full px-4 ">
            <div
              key={m.id}
              className={
                m.role === "user"
                  ? "rounded-3xl bg-slate-600 text-white"
                  : "rounded-3xl bg-slate-700 text-white"
              }
            >
              <div className="m-4">
                <p className="px-1 pt-2 text-lg font-semibold">
                  {m.role === "user" ? " 😎 Me " : " 🤖 Bot "}
                </p>
                <p className="px-1 py-2 text-base"> {m.content} </p>
              </div>
            </div>
          </div>
        ))}

        <div className="  min-w-2xl   fixed bottom-0 flex  w-full max-w-2xl bg-slate-900 pt-2  ">
          <div className=" flex w-full  ">
            <form
              className="mb-8 flex w-full rounded-3xl border border-gray-400 bg-slate-200 p-2 shadow-2xl"
              onSubmit={handleSubmit}
            >
              <TextareaAutosize
                className="max-h-15 flex w-full resize-none bg-slate-200 outline-none "
                value={input}
                placeholder="Type here!"
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                rows={1}
                maxRows={4}
              ></TextareaAutosize>

              <button className="mr-1" type="submit">
                <img src="/arrow-right.svg" alt="arrow" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

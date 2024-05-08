import React, { useEffect, useRef, useState } from "react";
import PageWrapper from "../PageWrapper.jsx";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaMicrophone } from "react-icons/fa";
import { LuImagePlus } from "react-icons/lu";
import { IoSend } from "react-icons/io5";

import { useSelector } from "react-redux";
import { selectTheme } from "../../app/themeSlice.js";
import Message from "./Message.jsx";

const GeminiAI = () => {
  const API_KEY = "AIzaSyBtIjthkp5NRoyzPjA7FeRLexhKc7E6SCI";
  let inputRef = useRef();
  let messageRef = useRef();
  console.log(messageRef.current);
  const [genAI, setGenAI] = useState(new GoogleGenerativeAI(API_KEY));
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [showSend, setShowSend] = useState(false);
  const theme = useSelector(selectTheme);
  // const genAI = new GoogleGenerativeAI(process.env.API_KEY);

  async function run(prompt) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    // console.log(result.response.text())
    const text = result.response.text();
    console.log(result);
    return text;
  }

  async function handleMessage(event) {
    if (event.key == "Enter" || event.type == "click") {
      setMessages((pre) => [
        ...pre,
        { type: "user", text: inputRef.current.value },
      ]);
      setInputValue("");
      const AI_MESSAGE = await run(inputRef.current.value);
      setMessages((pre) => [...pre, { type: "ai", text: AI_MESSAGE }]);
    }
  }
  function handleInputChange(e) {
    setInputValue(inputRef.current.value);
    if (inputRef.current.value) {
      setShowSend(true);
    } else {
      setShowSend(false);
    }
  }
  useEffect(() => {
    console.log(document.body.scrollHeight);
    if (messageRef.current) {
      window.scrollTo({
        top: messageRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [messages.length]);

  return (
    <PageWrapper title="Gemini AI">
      <div className="w-full max-w-[810px] h-full gap-4 mx-auto flex  flex-col justify-between relative">
        {messages.length == 0 && (
          <h2 className="text-2xl sm:text-3xl m-auto h-full pt-[25vh] text-center">
            Hello, How can I help you today?
          </h2>
        )}
        <ul className="flex flex-col gap-4 ">
          {messages.map((e, i) => (
            <li ref={messageRef} key={i}>
              <Message type={e.type} message={e.text} />
            </li>
          ))}
        </ul>

        <div
          className="sticky bottom-0 py-5 overflow-hidden"
          style={{
            backgroundColor: theme.homeBG,
          }}
        >
          <div
            className="flex items-center gap-2 pe-3 sm:pe-4 rounded-full overflow-hidden shadow-lg "
            style={{ backgroundColor: theme.componentBG }}
          >
            <input
              type="text"
              ref={inputRef}
              placeholder="Enter A Prompt Here"
              className="bg-transparent focus:outline-none flex-1 p-3 sm:p-4"
              onKeyDown={handleMessage}
              onChange={handleInputChange}
              value={inputValue}
            />
            <FaMicrophone className="text-xl cursor-pointer" />
            <LuImagePlus className="text-xl cursor-pointer" />
            {showSend && (
              <IoSend
                className="text-xl cursor-pointer"
                onClick={handleMessage}
              />
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default GeminiAI;

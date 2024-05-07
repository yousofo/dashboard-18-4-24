import React, { useEffect, useState } from "react";

const AIMessage = ({ message = "" }) => {
  const [textToShow, setTextToShow] = useState(message);
  let text = message.split("**");
  console.log("message" + message);
  useEffect(() => {
    if (text.length > 1) {
      for (let i = 0; i < text.length; i++) {
        if (i == 1) {
          text[i] = "<b>" + text[i] + "</b>";
        }else if(i % 2 !=0){
          text[i] = "<br><b>" + text[i] + "</b>";
        }
      }

      setTextToShow(text.join("").split("*").join("<br>"));
    }
  }, []);
  console.log("textToShow");
  console.log(textToShow);
  return (
    <li className="flex gap-2 sm:gap-4">
      <img src="/media/AIMessage.png" alt="" className="w-10 h-10" />
      <div
        className="pt-1.5"
        dangerouslySetInnerHTML={{ __html: textToShow }}
      />
    </li>
  );
};

export default AIMessage;

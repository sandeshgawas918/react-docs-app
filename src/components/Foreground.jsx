import React from "react";
import Card2 from "./Card2";


const Foreground = () => {
  const cardData = [
    {
      desc: "this is card 1 and its description",
      mbSize: "4.2 mb",
      download: true,
      tag: true,
      tagColor: "blue",
      tagTitle: "Download Now",
    },
    {
      desc: "this is card 2 and its description",
      mbSize: "5.2 mb",
      download: false,
      tag: true,
      tagColor: "red",
      tagTitle: "Delete Now",
    }
  ];
  return (
    <div className=" relative bg-orange-500/40 w-full h-screen z-20 p-4 flex flex-row">
      {cardData.map((data) => (
        <Card2
          desc={data.desc}
          size={data.mbSize}
          download={data.download}
          tag={data.tag}
          tagColor={data.tagColor}
          tagTitle={data.tagTitle}
        />
      ))}
    </div>
  );
};

export default Foreground;

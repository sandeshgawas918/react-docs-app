import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { RiDownloadCloudFill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

const Card2 = ({ desc, size, download, tag, tagColor, tagTitle }) => {
  let tagCol = tagColor
    ? { backgroundColor: tagColor }
    : { backgroundColor: "green" };

  return (
    <div>
      <motion.div drag dragConstraints={{ left: 0, right: 800, top:0, bottom:500 }} whileDrag={{scale:1.5}} className=" relative bg-black w-52 h-72 rounded-3xl p-7 m-6 flex flex-col">
        <FaRegFileAlt className=" text-red-700" />
        <p className=" text-yellow-500 mt-5">{desc}</p>
        <h6 className=" text-white absolute left-4 m-1  items-center justify-center bottom-9">
          {size}
        </h6>
        {download ? (
          <RiDownloadCloudFill className=" text-white absolute right-4 flex m-1 justify-center items-center text-2xl bottom-9" />
        ) : (
          <IoIosCloseCircle className=" text-white absolute right-4 flex m-1 justify-center items-center text-2xl bottom-9" />
        )}
        {tag && (
          <footer
            className="absolute bottom-0 w-52 h-8 left-0 rounded-b-3xl flex items-center justify-center"
            style={tagCol}
          >
            <h5 className=" text-white p-3">{tagTitle}</h5>
          </footer>
        )}
      </motion.div>
    </div>
  );
};

export default Card2;

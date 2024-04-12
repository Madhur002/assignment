"use client";
import { Checkbox } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Toast from "./Toast";

const Menu = () => {
  // Declaring states variables for keeping track of the selected and not selected pages...
  const [isSelectedAllPage, setIsSelectedAllPage] = useState(false);
  const [isSelectedPage1, setIsSelectedPage1] = useState(false);
  const [isSelectedPage2, setIsSelectedPage2] = useState(false);
  const [isSelectedPage3, setIsSelectedPage3] = useState(false);
  const [isSelectedPage4, setIsSelectedPage4] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Updating the all pages states if all pages is toggled
  useEffect(() => {
    if (isSelectedAllPage) {
      setIsSelectedPage1(true);
      setIsSelectedPage2(true);
      setIsSelectedPage3(true);
      setIsSelectedPage4(true);
    }
  }, [isSelectedAllPage]);

  // If all the pages are selected toggle select AllPages on.
  useEffect(() => {
    if (
      isSelectedPage1 &&
      isSelectedPage2 &&
      isSelectedPage3 &&
      isSelectedPage4
    ) {
      setIsSelectedAllPage(true);
    } else {
      setIsSelectedAllPage(false);
    }
  }, [isSelectedPage1, isSelectedPage2, isSelectedPage3, isSelectedPage4]);


  // handle button click
  const handleBtnClick = () => {
    setIsSelectedAllPage(false);
    setIsSelectedPage1(false);
    setIsSelectedPage2(false);
    setIsSelectedPage3(false);
    setIsSelectedPage4(false);
    setIsClicked(true)

    setInterval(() => {
      setIsClicked(false);
    }, 1000);
  }
  return (
    <>
      <div className="flex flex-col justify-start items-center gap-6 border-2 border-[#cfcfcf8a] w-[380px] shadow-lg drop-shadow-xl rounded-lg py-6 px-4">
        <div className="flex justify-between text-sm text-[#00000086] w-full items-center">
          <p>All Pages</p>
          <Checkbox
            isSelected={isSelectedAllPage}
            onValueChange={setIsSelectedAllPage}
            radius="sm"
            size="lg"
            className="mr-[-14px]"
          ></Checkbox>
        </div>
        <hr className="w-full border border-[#cfcfcf8a]" />
        <div className="flex justify-between text-sm text-[#00000086] w-full items-center">
          <p>Page 1</p>
          <Checkbox
            isSelected={isSelectedPage1}
            onValueChange={setIsSelectedPage1}
            radius="sm"
            size="lg"
            className="mr-[-14px]"
          />
        </div>
        <div className="flex justify-between text-sm text-[#00000086] w-full items-center">
          <p>Page 2</p>
          <Checkbox
            isSelected={isSelectedPage2}
            onValueChange={setIsSelectedPage2}
            radius="sm"
            size="lg"
            className="mr-[-14px]"
          />
        </div>
        <div className="flex justify-between text-sm text-[#00000086] w-full items-center">
          <p>Page 3</p>
          <Checkbox
            isSelected={isSelectedPage3}
            onValueChange={setIsSelectedPage3}
            radius="sm"
            size="lg"
            className="mr-[-14px]"
          />
        </div>
        <div className="flex justify-between text-sm text-[#00000086] w-full items-center">
          <p>Page 4</p>
          <Checkbox
            isSelected={isSelectedPage4}
            onValueChange={setIsSelectedPage4}
            radius="sm"
            size="lg"
            className="mr-[-14px]"
          />
        </div>
        <hr className="w-full border border-[#cfcfcf8a]" />
        <button onClick={()=> {handleBtnClick()}} className="text-center bg-[#FFCE22] hover:bg-[#FFD84D] transition-all duration-300 ease-in-out w-full text-sm py-2 rounded-md">
          Done
        </button>
      </div>

      {/* Customized toast built for Toasts */}
      <Toast state={[isSelectedAllPage, isSelectedPage1, isSelectedPage2, isSelectedPage3, isSelectedPage4, isClicked]}/>
    </>
  );
};

export default Menu;

"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TiTick } from "react-icons/ti";
import { IoHeartOutline } from "react-icons/io5";
const Toast = ({ state }) => {
  return (
    <div className="absolute top-0 pt-6 left-0 w-full flex justify-center items-start">
      <AnimatePresence>
        {(state[0]) && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>All Pages are selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}

        {state[1] && !state[0] && !state[2] && !state[3] && !state[4] && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Page 1 is selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}
        {state[1] && state[2] && !state[0] && !state[3] && !state[4] && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Page 1,2 is selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}
        {state[1] && state[3] && !state[0] && !state[2] && !state[4] && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Page 1,3 is selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}
        {state[1] && state[4] && !state[0] && !state[2] && !state[3] && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Page 1,4 is selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}
        {state[1] && state[4] && state[3] && !state[0] && !state[2] && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Page 1,3,4 is selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}
        {state[1] && state[4] && state[2] && !state[0] && !state[3] && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Page 1,2,4 is selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}
        {state[1] && state[2] && state[3] && !state[0] && !state[4] && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Page 1,2,3 is selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}
        {state[1] && state[2] && state[3] && state[4] && !state[0] && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Page 1,2,3,4 is selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}

        {state[2] && !state[0] && !state[1] && !state[3] && !state[4] && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Page 2 is selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}
        {state[2] && state[3] && !state[0] && !state[1] && !state[4] && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Page 2,3 is selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}
        {state[2] && state[4] && !state[0] && !state[1] && !state[3] && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Page 2,4 is selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}
        {state[2] && state[4] && state[3] && !state[0] && !state[1] && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Page 2,3,4 is selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}

        {state[3] && !state[0] && !state[1] && !state[2] && !state[4] && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Page 3 is selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}
        {(state[3] && state[4]) && (!state[0] && !state[2] && !state[1]) && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Page 3,4 is selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}

        {state[4] && !state[0] && !state[1] && !state[2] && !state[3] && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>Page 4 is selected</p>
              <TiTick className="text-blue-500 text-3xl" />
            </div>
          </motion.div>
        )}


        { state[5] && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="border border-[#cfcfcf8a] text-[#00000086] rounded-xl px-4 py-3"
          >
            <div className="flex justify-center items-center gap-2">
              <p>All Pages are saved</p>
              <IoHeartOutline className="text-red-500 text-2xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toast;

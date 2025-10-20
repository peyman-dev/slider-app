"use client";
import { useToggle } from "@/core/hooks/use-toggle";
import clsx from "clsx";
import * as React from "react";
import { AnimatePresence, motion } from "motion/react";

const Modal = () => {
  const [isOpen, toggle] = useToggle();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          exit={{
            opacity: 0,
            y: 1920,
          }}
          className={clsx(
            "size-full fixed backdrop-blur-sm duration-150 bg-black/10",
          )}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

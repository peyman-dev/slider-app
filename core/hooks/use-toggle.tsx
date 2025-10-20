"use client";
import * as React from "react";

export const useToggle = (
  value?: boolean,
): [isOpen: boolean, toggle: () => void] => {
  const [state, setState] = React.useState(value || false);

  const toggle = () => setState(!state);

  return [state, toggle];
};

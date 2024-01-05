import React from "react";
// Recoil
import { atom } from "recoil";
export const media_version = atom({
  key: "version",
  default: "PC",
});

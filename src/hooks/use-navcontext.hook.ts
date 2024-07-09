"use client";
import { NavContext } from "@/context/nav-context";
import React from "react";

export const useNavContext = () => React.useContext(NavContext);

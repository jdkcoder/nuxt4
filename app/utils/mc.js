import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
export default (...args) => twMerge(clsx(args))
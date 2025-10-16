import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Props = {
  order: number;
} & ComponentProps<"h1">

const orderClasses = [
  "font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl",
  "font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl",
]

export const Title = ({ order, className, ...props }: Props) => {
  const classNames = cn("text-white wrap-anywhere break-normal whitespace-pre-wrap", order - 1 < orderClasses.length ? orderClasses[order - 1] : "", className)

  switch (order) {
    case 1:
      return <h1 className={classNames} {...props} />
    case 2:
      return <h2 className={classNames} {...props} />
  }

  return <h6 className={classNames} {...props} />
}

import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

export const GridAligned = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-[max-content_1fr] gap-4 items-center", className)} {...props} />
  )
}

GridAligned.Title = function ({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("", className)} {...props} />
}

GridAligned.Description = function (props: ComponentProps<"div">) {
  return <div {...props} />
}

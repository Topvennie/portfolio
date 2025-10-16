import { type LogoOption, logos } from "@/lib/types/logo";
import { cn } from "@/lib/utils"

import type { ComponentProps } from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type Props = {
  logo?: LogoOption;
} & ComponentProps<"img">

export const Logo = ({ logo, ...props }: Props) => {
  if (!logo) {
    return <Normal {...props} />
  }

  const info = logos[logo]

  return (
    <Tooltip>
      <TooltipTrigger>
        {info.href
          ? (
            <a href={info.href} target="_blank" rel="noopener noreferrer">
              <Normal src={info.logo} {...props} />
            </a>
          )
          : <Normal src={info.logo} {...props} />
        }
      </TooltipTrigger>
      <TooltipContent>
        {info.tip}
      </TooltipContent>
    </Tooltip>
  )
}

const Normal = ({ className, ...props }: ComponentProps<"img">) => {
  return <img className={cn("h-8 object-cover", className)} {...props} />
}


"use client";

import { Button, ButtonProps } from "@heroui/react";
import clsx from "clsx";

export default function BigGreenBtn({ className, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      className={clsx(
        "btn-primary big-btn-spacing text-pre-xl leading-7 w-fit box-border h-auto!",
        className,
      )}
    >
      {props.children}
    </Button>
  );
}

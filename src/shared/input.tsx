import { Button } from "@/components/ui/button";
import { Input as InputField } from "@/components/ui/input";
import React, { ElementType, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: ElementType;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ Icon, ...rest }, ref) => {
    return (
      <div className="relative group">
        <InputField {...rest} ref={ref} />
        {Icon && (
          <Button
            variant="secondary"
            size="icon"
            type="button"
            className="absolute top-[7px] right-2 w-4 h-4 group-focus-within:text-accent bg-transparent text-white/80"
          >
            <Icon />
          </Button>
        )}
      </div>
    );
  }
);

import { ScrollShadow, ScrollShadowProps } from "@nextui-org/react";
import { forwardRef } from "react";

/**
 * Alternative base component for Tables to provide a visual indication when
 * rows overflow horizontally. Not sure what forwardRef does but it prevents
 * a console error from React.
 */
export const HorizontalScrollShadow = forwardRef<HTMLElement>(
  function HorizontalScrollShadow(props: ScrollShadowProps, ref) {
    return (
      <ScrollShadow
        {...props}
        ref={ref}
        orientation="horizontal"
        size={20}
      />
    );
  }
);

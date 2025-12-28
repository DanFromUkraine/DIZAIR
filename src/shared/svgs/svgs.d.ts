import { RefObject } from "react";

export type SvgProps = Readonly<
    SvgProps<SVGSVGElement> & {
        ref: RefObject<SVGSVGElement | null>;
    }
>;

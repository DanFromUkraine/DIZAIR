import { SvgProps } from "./svgs";

export default function OpenMenuSvg(props: SvgProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            width="1.5rem"
            height="1.5rem"
            role="presentation"
            {...props}
        >
            <path
                d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                fill="green"
            ></path>
        </svg>
    );
}

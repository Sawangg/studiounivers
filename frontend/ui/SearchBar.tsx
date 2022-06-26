import React, { useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";

export const SearchBar: React.FC<{}> = () => {
    const [open, setOpen] = useState(false);
    const spring = useSpring({ opacity: open ? 1 : 0 });
    const textInput = useRef<HTMLInputElement>(null);

    return (
        <div className="relative">
            <div className="absolute z-50 top-3 left-3">
                <Image src="/assets/icons/search.svg" width="20px" height="20px" alt="search" title="Rechercher"
                    className="cursor-pointer transition duration-200 ease-in-out"
                    onMouseOver={() => {
                        setOpen(!open);
                        textInput.current!.value = "";
                        textInput.current!.focus();
                    }}
                    onMouseLeave={() => {
                        setOpen(!open);
                        textInput.current!.value = "";
                    }}
                    onClick={() => open ?? setOpen(!open)}
                />
            </div>
            <animated.input
                name="ipt-search"
                ref={textInput}
                style={spring}
                className="w-full px-10 py-1 text-lg border-2 border-primary-900 rounded-full outline-none"
            />
        </div>
    );
};

import Image from "next/image";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const sizeClassnames = {
    medium: "py-4 px-8",
    small: "px-3 py-6",
};

const colorClassnames = {
    primary: "bg-primary-600 text-white hover:bg-primary-500 transition duration-200 ease-in-out",
    secondary: "bg-white-300 text-primary-700 hover:bg-accent-200/50 transition duration-200 ease-in-out",
    opaque: "",
};

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    size?: keyof typeof sizeClassnames;
    color?: keyof typeof colorClassnames;
    arrow?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    size = "medium",
    color = "primary",
    disabled,
    className = "",
    arrow,
    ...props
}) => (
    <button
        disabled={disabled}
        className={`cursor-pointer flex outline-none focus:ring-4 ${sizeClassnames[size]} ${colorClassnames[color]} 
            flex items-center justify-center text-lg group gap-x-2 min-w-max
            ${className}`}
        {...props}
    >
        <span className="flex items-center relative group-hover:before:scale-x-100 group-hover:before:scale-y-100
            before:transition-scale before:absolute before:bottom-[1px] before:left-0 before:origin-left before:border-t
            before:scale-x-0 before:duration-700 before:ease-out-expo"
        >
            {children}
        </span>
        {arrow && <Image src="/assets/icons/caret.svg" alt="caret" width="20px" height="20px" />}
    </button>
);

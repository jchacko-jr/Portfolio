import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 500, height = 500 }) => {
    return (
        <Image
            className={`w-${width} h-${height}`}
            src="/logo.svg"
            alt="Logo"
            width={width}
            height={height}
        />
    );
};

export default Logo;

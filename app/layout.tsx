import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://portfolio-jo.vercel.app/"),
    title: "Jomon Chacko Portfolio",
    description:
    "My name is Jomon Chacko and I am a 3D animation artist, a proficient user of Unreal Engine 5, and skilled in video editing and graphic design. With years of experience in these fields, I have honed my skills and am excited to showcase my work to you. I am passionate about visually stunning and engaging content that captivates audiences.",
    generator: "Next.js",
    applicationName: "Portfilio Joe",
    keywords: [
        "freelance",
        "developer",
        "freelance developer",
        "frontend",
        "nextjs",
        "astro",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "germany",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Seek Visual Artist - Designer and Developer",
        description:
      "My name is Jomon Chacko and I am a 3D animation artist, a proficient user of Unreal Engine 5, and skilled in video editing and graphic design. With years of experience in these fields, I have honed my skills and am excited to showcase my work to you. I am passionate about visually stunning and engaging content that captivates audiences..",
        url: "",
        siteName: "",
        images: [
            {
                url: "",
                width: 1200,
                height: 630,
                alt: "",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Jomon Chacko Portfilio",
        description:
      "My name is Jomon Chacko and I am a 3D animation artist, a proficient user of Unreal Engine 5, and skilled in video editing and graphic design. With years of experience in these fields, I have honed my skills and am excited to showcase my work to you. I am passionate about visually stunning and engaging content that captivates audiences.",
        creator: "SeekVFX",
        creatorId: "0000000000",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}

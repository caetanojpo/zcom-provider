import localFont from "next/font/local";

export const neometric = localFont({
    src: [
        {path: "../../public/fonts/Neometric-Light-Regular.otf", weight: "300", style: "normal"},
        {path: "../../public/fonts/Neometric-Light-Italic.otf", weight: "300", style: "italic"},

        // Regular / base
        {path: "../../public/fonts/Neometric-Regular.otf", weight: "400", style: "normal"},
        {path: "../../public/fonts/Neometric-Italic.otf", weight: "400", style: "italic"},

        // Medium
        {path: "../../public/fonts/Neometric-Medium-Regular.otf", weight: "500", style: "normal"},
        {path: "../../public/fonts/Neometric-Medium-Italic.otf", weight: "500", style: "italic"},

        // Bold
        {path: "../../public/fonts/Neometric-Bold-Regular.otf", weight: "600", style: "normal"},
        {path: "../../public/fonts/Neometric-Bold-Italic.otf", weight: "600", style: "italic"},

        // Extra Bold
        {path: "../../public/fonts/Neometric-Extra-Bold.otf", weight: "700", style: "normal"},
        {path: "../../public/fonts/Neometric-Extra-Bold-Italic.otf", weight: "700", style: "italic"},
    ],
    variable: "--font-neometric",
    display: "swap",
});
import React, { useEffect, useState } from "react";

const BG_IMAGE =
    "https://www.infobae.com/resizer/v2/UIUNPWLFUJAGBHX6DPVGK5U2JU.jpg?auth=a8460c3bfe4f77615cf49a1de8bcf22ae85fe0bfdf5d286ee23494020d978e8c&smart=true&width=992&height=558&quality=85"; // Imagen de huerto verde

export const ParallaxBackground = () => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            aria-hidden
            className="fixed inset-0 -z-10 bg-green-50"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(240,253,244,0.8),rgba(255,255,255,0.9)),
                    url('${BG_IMAGE}')
                `,
                backgroundAttachment: "fixed",
                backgroundPosition: `center ${offsetY * 0.4}px`, // Efecto parallax
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "100vh",
                width: "100vw",
                transition: "background-position 0.3s",
            }}
        />
    );
};
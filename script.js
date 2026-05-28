tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        "brand-bg": "#060606",
                        "brand-card": "#0d0d0d",
                        "brand-purple": "#8b5cf6",
                        "brand-purpleHover": "#a78bfa",
                        "brand-textGray": "#9ca3af",
                    },
                    fontFamily: {
                        sans: ["Inter", "sans-serif"],
                    },
                },
            },
        };

document.getElementById("year").textContent = new Date().getFullYear();
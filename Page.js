import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
export const FlippablePage = ({ frontSide, backSide, zIndex, onFlipped }) => {
    const [flipped, setFlipped] = useState(false);
    const [pageStyle, api] = useSpring(() => ({
        rotateY: 0,
        config: { mass: 5, tension: 500, friction: 150 },
        touchAction: "none"
    }));
    const bind = useDrag(({ movement: [movX], cancel, dragging }) => {
        // console.log(movX, pageStyle.rotateY.get());
        const currentRY = pageStyle.rotateY.get();
        if (currentRY > -60) {
            api.start({ rotateY: 0 });
            setFlipped(false);
        }
        if (currentRY <= -60 && (movX < 0 || !dragging)) {
            api.start({ rotateY: -180 });
            setFlipped(true);
        }
        else if (dragging && currentRY <= 0) {
            api.start({ rotateY: currentRY + movX });
        }
    });
    useEffect(() => {
        if (onFlipped) {
            onFlipped(flipped);
        }
    }, [flipped, onFlipped]);
    return (React.createElement(animated.div, { ...bind(), style: {
            zIndex: flipped ? 10 + zIndex : 100 - zIndex,
            transformOrigin: "left",
            transform: "perspective(600px)",
            ...pageStyle
        }, className: "page" },
        React.createElement(animated.div, { className: "front" },
            React.createElement("img", { src: frontSide, alt: "", draggable: "false" })),
        React.createElement(animated.div, { className: "back" },
            React.createElement("img", { src: backSide, alt: "", draggable: "false" }))));
};
//# sourceMappingURL=Page.js.map
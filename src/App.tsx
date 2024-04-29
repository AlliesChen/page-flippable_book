import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FlippablePage } from "./Page";

const coverImage = {
  frontSide: "https://images.unsplash.com/photo-1647892591880-58c55fd726d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  backSide: "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
  zIndex: -1
}

const pages = [
  {
    frontSide:
      "https://images.unsplash.com/photo-1612454376902-577cd469d008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    backSide:
      "https://images.unsplash.com/photo-1609845768806-767fcfc317b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2373&q=80"
  },
  {
    frontSide:
      "https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    backSide:
      "https://images.unsplash.com/photo-1596743343697-bd2c1e5a8c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
  }
];

export default function App() {
  const { translateX } = useSpring({
    translateX: "0"
  });
  const onBookOpen = (isFlipped: boolean) => {
    if (isFlipped) {
      translateX.start("50%");
    } else {
      translateX.start("0");
    }
  };
  return (
    <div className="container">
      <animated.div style={{ translateX }} className="book">
        {/* The back cover image */}
        <img
          className="book__cover"
          src="https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="back cover"
          draggable="false"
        />
        {pages.map((page, index) => (
          <FlippablePage
            key={crypto.randomUUID()}
            frontSide={page.frontSide}
            backSide={page.backSide}
            zIndex={index}
          />
        ))}
        {/* The cover page */}
        <FlippablePage
          frontSide={coverImage.frontSide}
          backSide={coverImage.backSide}
          zIndex={coverImage.zIndex}
          onFlipped={onBookOpen}
        />
      </animated.div>
    </div>
  );
}

import { useInView } from "react-intersection-observer";
import "./Card.scss";

interface Props {
  children: React.ReactNode;
  wide?: boolean;
  animation?: "slideRight" | "slideLeft" | undefined;
}

const ANIMATIONS = {
  slideRight: {
    show: "animation__slideShow",
    hide: "animation__slideRightHidden",
  },
  slideLeft: {
    show: "animation__slideShow",
    hide: "animation__slideLeftHidden",
  },
};

const Card = ({ children, wide, animation }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  return (
    <div
      ref={ref}
      className={`card ${
        animation
          ? inView
            ? ANIMATIONS[animation].show
            : ANIMATIONS[animation].hide
          : ""
      } ${wide ? " wide" : ""}`}
    >
      {children}
    </div>
  );
};

export default Card;

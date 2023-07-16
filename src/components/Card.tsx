import "./Card.scss";

interface Props {
  children: React.ReactNode;
  wide?: boolean;
}

const Card = ({ children, wide }: Props) => {
  return <div className={"card" + (wide ? " wide" : "")}>{children}</div>;
};

export default Card;

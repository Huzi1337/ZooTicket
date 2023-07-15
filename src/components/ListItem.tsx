import "./ListItem.scss";

interface Props {
  item: string;
  price: number;
  isDark: boolean;
}

const ListItem = ({ item, price, isDark }: Props) => {
  return (
    <div className={`listItem__container${isDark ? " dark" : ""}`}>
      <h4>{item}</h4>
      <h4>{price + " PLN"}</h4>
    </div>
  );
};

export default ListItem;

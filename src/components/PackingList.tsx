// import { initialItems } from "../data/data";
import { useItems } from "../hooks/useItems";
import Item from "./Item";

/*
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
*/

function PackingList() {
  const { items } = useItems();

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;

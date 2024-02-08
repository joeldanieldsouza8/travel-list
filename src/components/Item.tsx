import { ItemProps } from "../types/itemTypes";

/*
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
*/

interface ItemComponentProps {
  item: ItemProps;
}

function Item({ item }: ItemComponentProps) {
  return (
    <li>
      <span id={item.packed ? "packed" : ""}>
        {item.quantity} {item.description}
      </span>

      <button>❌</button>
    </li>
  );
}

export default Item;

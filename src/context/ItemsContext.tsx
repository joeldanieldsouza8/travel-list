import React, { createContext, useState } from "react";
import { ItemProps } from "../types/itemTypes";

interface ItemsContextProps {
  items: ItemProps[];
  onAddItems: (item: ItemProps) => void;
}

export const ItemsContext = createContext<ItemsContextProps | null>(null);

function ItemsProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ItemProps[]>([]);

  const onAddItems = (item: ItemProps) => {
    // Remember, it's important to return a new array by spreading the previous items and then adding the new item. In React, we should never mutate state directly.
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <ItemsContext.Provider value={{ items, onAddItems }}>
      {children}
    </ItemsContext.Provider>
  );
}

export default ItemsProvider;

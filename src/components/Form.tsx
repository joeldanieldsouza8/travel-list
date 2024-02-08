import React, { useState } from "react";

import { ItemProps } from "../types/itemTypes";
import { useItems } from "../hooks/useItems";

function Form() {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const { onAddItems } = useItems();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Guard clause
    if (!description) {
      return;
    }

    const newItem: ItemProps = {
      id: Math.random(),
      description,
      quantity,
      packed: false,
    };

    // Add the new item to the list
    onAddItems(newItem);

    console.log(newItem); // debug

    // Reset the form
    setDescription("");
    setQuantity(1);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <form className="add-form" onSubmit={handleFormSubmit}>
      <h3>What do you need for you trip?</h3>

      <select onChange={handleQuantityChange} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

      {/* An input form element whose value is controlled by React in this way is called a “controlled component */}
      <input
        type="text"
        placeholder="Item..."
        onChange={handleDescriptionChange}
        value={description}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;

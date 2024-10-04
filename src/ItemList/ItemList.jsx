import { useItems } from '../ItemsContext/ItemsContext';

const ItemList = () => {
  const { items, setItems } = useItems();

  const handleRemoveItem = itemToRemove => {
    setItems(newItems => newItems.filter(item => item !== itemToRemove));
  };

  return (
    <details>
      <summary>View all items</summary>
      {!!items.length && (
        <ul>
          {items.map(i => (
            <li key={i}>
              {i}
              <button onClick={() => handleRemoveItem(i)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </details>
  );
};

export default ItemList;

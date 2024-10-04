import { useItems } from '../ItemsContext/ItemsContext';
import styles from './ShoppingList.module.scss';

const ShoppingList = () => {
  const { items, setItems, shoppingList, setShoppingList } = useItems();

  const handleSubmit = event => {
    event.preventDefault();

    const { itemName: rawName } = Object.fromEntries(
      new FormData(event.target)
    );

    const itemName = rawName.trim();

    if (!items.includes(itemName)) {
      setItems(i => [...i, itemName]);
    }

    if (shoppingList.includes(itemName)) {
      alert('Item already in list');
      return;
    }

    event.target.reset();

    setShoppingList(s => [...s, itemName]);
  };

  const handleRemoveItem = itemToRemove => {
    setShoppingList(newList => newList.filter(item => item !== itemToRemove));
  };

  return (
    <>
      <h1>Shopping list</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          list="items-for-list"
          required
          name="itemName"
          autoComplete="false"
        />

        <datalist id="items-for-list">
          {items.map(i => (
            <option key={i} value={i} />
          ))}
        </datalist>

        <br />

        <button type="submit">Add</button>
      </form>

      {!!shoppingList.length && (
        <ul>
          {shoppingList.map(i => (
            <li key={i} className={styles.listItem}>
              {i}
              <button onClick={() => handleRemoveItem(i)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ShoppingList;

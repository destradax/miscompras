import ItemList from './ItemList/ItemList';
import { ItemsProvider } from './ItemsContext/ItemsContext';
import ShoppingList from './ShoppingList/ShoppingList';
import "normalize.css";

function App() {
  return (
    <ItemsProvider>
      <ShoppingList />
      <ItemList />
    </ItemsProvider>
  );
}

export default App;

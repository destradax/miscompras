import ItemList from './ItemList/ItemList';
import { ItemsProvider } from './ItemsContext/ItemsContext';
import ShoppingList from './ShoppingList/ShoppingList';

function App() {
  return (
    <ItemsProvider>
      <ShoppingList />
      <ItemList />
    </ItemsProvider>
  );
}

export default App;

import { useContext } from 'react';
import { ItemsContext } from '../context/ItemsContext';

export function useItems() {
  const context = useContext(ItemsContext);
  if (context === null) {
    throw new Error('useItems must be used within an ItemsProvider');
  }
  return context;
}

import { useCallback, useState } from 'react';
import { useDebounce } from 'use-debounce';

export const useSearchDebounce = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [value] = useDebounce(searchValue, 500);

  const onChangeSearchValue = useCallback((value: string) => setSearchValue(value), []);

  return { searchValue: value, onChangeSearchValue };
};

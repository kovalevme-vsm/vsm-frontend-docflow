import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import { ReactElement } from 'react';
import { useSearchParams } from 'react-router';

export function Search(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearch: SearchProps['onSearch'] = (value) => {
    if (value) {
      setSearchParams(new URLSearchParams({ ...searchParams, search: value }));
    } else {
      const updatedSearchParams = Object.fromEntries(
        Object.entries(searchParams).filter(([key]) => key !== 'search')
      );
      setSearchParams(new URLSearchParams(updatedSearchParams));
    }
  };

  return (
    <Input.Search
      defaultValue={searchParams.get('search') || ''}
      placeholder={'Поиск'}
      onSearch={onSearch}
      allowClear
    />
  );
}

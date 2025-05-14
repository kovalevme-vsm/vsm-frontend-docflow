import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import { ReactElement } from 'react';
import { useSearchParams } from 'react-router';

export function Search(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearch: SearchProps['onSearch'] = (value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set('search', value);
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
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

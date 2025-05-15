import { Table as ATable } from 'antd';
import { TableProps } from 'antd/es/table/InternalTable';
import { ReactElement } from 'react';
import { useSearchParams } from 'react-router';

interface Props<T> extends Omit<TableProps<T>, 'pagination' | 'scroll' | 'size' | 'rowKey'> {
  total?: number;
}

export function Table<T>({ total = 0, ...props }: Props<T>): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('page_size') || '10', 10);

  const handlePagination = (page: number, pageSize: number) => {
    setSearchParams(
      { ...Object.fromEntries(searchParams), page: String(page), page_size: String(pageSize) },
      { replace: true }
    );
  };

  return (
    <ATable<T>
      pagination={{
        current: page,
        pageSize: pageSize,
        total: total,
        size: 'default',
        showTotal: (count) => (
          <>
            Всего: <b>{count}</b> элементов
          </>
        ),
        onChange: handlePagination,
      }}
      rowKey="id"
      size={'small'}
      scroll={{ x: 'max-content' }}
      {...props}
    />
  );
}

import { Table as ATable } from 'antd';
import { TableProps } from 'antd/es/table/InternalTable';
import { ReactElement, useEffect } from 'react';
import { useSearchParams } from 'react-router';

interface Props
  extends Omit<TableProps, 'pagination' | 'scroll' | 'size' | 'rowKey'> {
  total?: number;
  errorCode?: number | string;
}

export function Table({ total = 0, errorCode, ...props }: Props): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);

  useEffect(() => {
    if (errorCode === 404) {
      setSearchParams({ page: page > 1 ? String(page - 1) : '1' });
    }
  }, [errorCode]);

  return (
    <ATable
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
        onChange: (page, pageSize) => {
          setSearchParams(
            { page: String(page), pageSize: String(pageSize) },
            { replace: true }
          );
        },
      }}
      rowKey="id"
      size={'small'}
      scroll={{ x: 'max-content' }}
      {...props}
    />
  );
}

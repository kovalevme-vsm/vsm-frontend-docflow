import {
  ColumnDef,
  ColumnFiltersState,
  ColumnResizeDirection,
  ColumnResizeMode,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  RowSelectionState,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiFilter } from 'react-icons/fi';
import { Empty } from 'shared/ui';

interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  columnResizeMode?: ColumnResizeMode;
  columnResizeDirection?: ColumnResizeDirection;
  enableSorting?: boolean;
  enableColumnFilters?: boolean;
  enableRowSelection?: boolean;
  enablePagination?: boolean;
  className?: string;
}

export function Table<TData>({
  data,
  columns,
  columnResizeMode = 'onChange',
  columnResizeDirection = 'ltr',
  enableSorting = false,
  enableColumnFilters = false,
  enablePagination = false,
}: TableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getFilteredRowModel: enableColumnFilters
      ? getFilteredRowModel()
      : undefined,
    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,
    columnResizeMode,
    columnResizeDirection,
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  return (
    <div className="no-scroll-bar overflow-x-scroll rounded-lg border border-gray-100 dark:border-gray-900">
      <table className="min-w-full divide-y divide-gray-200 rounded-2xl dark:divide-gray-900">
        <thead className="bg-gray-100 dark:bg-gray-900">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="group relative px-3 py-3.5 text-left text-sm font-medium text-gray-900 dark:text-gray-50"
                  style={{
                    width: header.getSize(),
                  }}
                >
                  <div
                    className={`flex items-center ${
                      header.column.getCanSort()
                        ? 'cursor-pointer select-none'
                        : ''
                    }`}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {enableSorting && header.column.getCanSort() && (
                      <span className="ml-2 flex-none rounded text-gray-400">
                        {{
                          asc: <FiChevronUp className="h-4 w-4" />,
                          desc: <FiChevronDown className="h-4 w-4" />,
                        }[header.column.getIsSorted() as string] ?? (
                          <FiFilter className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                        )}
                      </span>
                    )}
                  </div>
                  {header.column.getCanResize() && (
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`absolute top-0 right-0 h-full w-1 cursor-col-resize touch-none bg-gray-200 select-none ${
                        header.column.getIsResizing() ? 'bg-blue-500' : ''
                      }`}
                    />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={row.getIsSelected() ? 'bg-gray-50' : undefined}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-3 py-4 text-sm whitespace-nowrap text-gray-500"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className={'sticky left-0'}>
          <Empty />
        </div>
      )}
    </div>
  );
}

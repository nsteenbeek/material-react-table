import React, { FC } from 'react';
import { TableBody } from '@mui/material';
import { MRT_TableBodyRow } from './MRT_TableBodyRow';
import { useMRT } from '../useMRT';

interface Props {}

export const MRT_TableBody: FC<Props> = () => {
  const {
    enablePagination,
    muiTableBodyProps,
    tableInstance,
    tableInstance: {
      getPaginationRowModel,
      getPrePaginationRowModel,
      getTableBodyProps,
    },
  } = useMRT();

  const rows = enablePagination
    ? getPaginationRowModel().rows
    : getPrePaginationRowModel().rows;

  const mTableBodyProps =
    muiTableBodyProps instanceof Function
      ? muiTableBodyProps(tableInstance)
      : muiTableBodyProps;

  const tableBodyProps = {
    ...getTableBodyProps(),
    ...mTableBodyProps,
  };

  return (
    <TableBody {...tableBodyProps}>
      {rows.map((row) => (
        <MRT_TableBodyRow key={row.getRowProps().key} row={row} />
      ))}
    </TableBody>
  );
};

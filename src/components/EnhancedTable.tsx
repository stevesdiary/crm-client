import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.selected,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface EnhancedTableProps {
  columns: { id: string; label: string; }[];
  data: any[];
  orderBy: string;
  order: 'asc' | 'desc';
  onRequestSort: (property: string) => void;
}

const EnhancedTable: React.FC<EnhancedTableProps> = ({ columns, data, orderBy, order, onRequestSort }) => {
  return (
    <TableContainer component={Paper} className="shadow-lg">
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} sortDirection={orderBy === column.id ? order : false}>
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={orderBy === column.id ? order : 'asc'}
                  onClick={() => onRequestSort(column.id)}
                >
                  {column.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.id}>{row[column.id]}</TableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EnhancedTable;
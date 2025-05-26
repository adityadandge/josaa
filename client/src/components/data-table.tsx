"use client";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
} from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function customFilterFn(row: any, _: any, filterValue: string): boolean {
  if (filterValue.length === 0) return true;

  const filterRank = parseInt(filterValue, 10);
  if (isNaN(filterRank)) return true;

  const openingRaw = row.original.opening || "";
  const closingRaw = row.original.closing || "";

  const openingRank = parseInt(openingRaw.toLowerCase().replace(/p$/, ""), 10);
  const closingRank = parseInt(closingRaw.toLowerCase().replace(/p$/, ""), 10);

  if (isNaN(openingRank) || isNaN(closingRank)) return false;

  return openingRank <= filterRank && filterRank <= closingRank;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  selectValue,
  onSelectValueChange,
}: DataTableProps<TData, TValue> & {
  selectValue: string;
  onSelectValueChange: (value: string) => void;
}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [globalFilter, setGlobalFilter] = React.useState<string>("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    globalFilterFn: customFilterFn,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      globalFilter,
      columnFilters,
    },
  });

  return (
    <div>
      <div className="flex items-center justify-center py-4 gap-2">
        <Select value={selectValue} onValueChange={onSelectValueChange}>
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Select round..." />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5].map((value) => (
              <SelectItem key={`select-${value}`} value={`${value}`}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          placeholder="Enter your rank..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

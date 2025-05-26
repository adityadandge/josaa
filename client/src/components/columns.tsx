"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { type ColumnDef } from "@tanstack/react-table";
import { ChevronsUpDown, Funnel } from "lucide-react";

export type Column = {
  institute: string;
  branch: string;
  category: string;
  gender: string;
  opening: string;
  closing: string;
};

export const columns: ColumnDef<Column>[] = [
  {
    accessorKey: "institute",
    header: "Institute",
  },
  {
    accessorKey: "branch",
    header: "Branch",
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      const options = ["OPEN", "EWS", "OBC-NCL", "SC", "ST"];
      const filterValue: string[] = (column.getFilterValue() as string[]) ?? [];

      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="cursor-pointer">
              Category
              <Funnel className="ml-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="flex flex-col gap-2">
              {options.map((value) => (
                <div className="flex gap-2">
                  <Checkbox
                    id={value}
                    checked={filterValue.includes(value)}
                    onCheckedChange={(checked) =>
                      column.setFilterValue(
                        checked
                          ? [...new Set([...filterValue, value])]
                          : filterValue.filter((_value) => _value !== value)
                      )
                    }
                  />
                  <Label htmlFor={value}>{value}</Label>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      );
    },
    filterFn: (row: any, _: any, filterValue: string[]) => {
      if (filterValue.length === 0) return true;

      const category = row.original.category;
      return filterValue.includes(category);
    },
  },
  {
    accessorKey: "gender",
    header: ({ column }) => {
      const options = [
        "Gender-Neutral",
        "Female-only (including Supernumerary)",
      ];
      const filterValue: string[] = (column.getFilterValue() as string[]) ?? [];

      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="cursor-pointer">
              Gender
              <Funnel className="ml-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="flex flex-col gap-2">
              {options.map((value) => (
                <div className="flex gap-2">
                  <Checkbox
                    id={value}
                    checked={filterValue.includes(value)}
                    onCheckedChange={(checked) =>
                      column.setFilterValue(
                        checked
                          ? [...new Set([...filterValue, value])]
                          : filterValue.filter((_value) => _value !== value)
                      )
                    }
                  />
                  <Label htmlFor={value}>{value}</Label>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      );
    },
    filterFn: (row: any, _: any, filterValue: string[]) => {
      if (filterValue.length === 0) return true;

      const gender = row.original.gender;
      return filterValue.includes(gender);
    },
  },
  {
    accessorKey: "opening",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Opening Rank
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "closing",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Closing Rank
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];

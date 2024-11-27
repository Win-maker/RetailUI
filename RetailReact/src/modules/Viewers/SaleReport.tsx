"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import api from "../../api";

export const SaleReport = () => {
  type SaleType = {
    saleID: string;
    productID: string;
    productName: string;
    quantity: number;
    saleDate: Date;
    totalPrice: number;
  };

  const columns: ColumnDef<SaleType>[] = [
    {
      accessorKey: "saleID",
      header: () => <div className="text-left w-[200px]">Sale ID</div>,
      size: 200,
    },
    {
      accessorKey: "productID",
      header: () => <div className="text-left w-[200px]">Product ID</div>,
      size: 200,
    },
    {
      accessorKey: "productName",
      header: () => <div className="text-left w-[100px]">Product Name</div>,
      size: 200, 
    },
    {
      accessorKey: "quantity",
      header: () => <div className="text-left w-[100px]">Quantity</div>,
      size: 150,
    },
    {
      accessorKey: "totalPrice",
      header: () => <div className="text-left w-[100px]">Total Price</div>,
      size: 150,
    },
    {
      accessorKey: "saleDate",
      header: () => <div className="text-left w-[200px]">SaleDate</div>,
      size: 200,
      cell: ({ getValue }) => {
        const dateString = getValue<string>();
        const date = new Date(dateString);
        return isNaN(date.getTime())
          ? "Invalid Date"
          : new Intl.DateTimeFormat("en-US", {
              dateStyle: "long",
              timeStyle: "short",
            }).format(date);
      },
    },
  ];

  const { data: saleReport = [], isLoading, isError } =
    api.saleReport.getAllSaleReport.useQuery();

  const table = useReactTable({
    data: saleReport,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center p-4">Error loading sale reports.</div>;
  }

  return (
    <div className="rounded-md border p-4">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

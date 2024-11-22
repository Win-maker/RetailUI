import { createColumnHelper, useReactTable, getCoreRowModel, ColumnDef } from "@tanstack/react-table";
import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};


const users: User[] = [
  { id: 1, name: "winwinhtet", email: "win@gmail.com", phone: "09952925290" },
  { id: 2, name: "winhtet", email: "winhtet@gmail.com", phone: "09952925290" },
  { id: 3, name: "win", email: "win1999@gmail.com", phone: "09952925290" },
  { id: 4, name: "winnhtett", email: "winhtet@gmail.com", phone: "09952925290" },
  { id: 5, name: "awin", email: "winhtet@gmail.com", phone: "09952925290" }
];


const columnHelper = createColumnHelper<User>();


const columns: ColumnDef<User>[] = [
  columnHelper.accessor("id", {
    header: "ID", 
    cell: (info) => info.getValue(), 
  }),
  columnHelper.accessor("name", {
    header: "Name", 
    cell: (info) => info.getValue(), 
  }),
  columnHelper.accessor("email", {
    header: "Email", 
    cell: (info) => <span className="italic text-blue-600">{info.getValue()}</span>, 
  }),
  columnHelper.accessor("phone", {
    header: "Phone", 
    cell: (info) => info.getValue(), 
  }),
];

const App = () => {
  const [data] = useState<User[]>(users);


  const table = useReactTable({
    data,
    columns, 
    getCoreRowModel: getCoreRowModel(), 
  });

  console.log("this is tableGetHeaderGroup", table.getHeaderGroups());
  console.log('this is getRowModel',table.getRowModel())

  const renderHeader = (header:any) => {
    if (typeof header.column.columnDef.header === 'function') {
      return header.column.columnDef.header(header);
    }
    return header.column.columnDef.header;
  };

  return (
    <div>
      <table style={{ width: "100%", border: "1px solid black" }}>
      
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                 
                  {renderHeader(header)}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{cell.getContext().renderValue()}</td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default App;

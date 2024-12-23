import { QueryResult } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface QueryResultsTableProps {
  results: QueryResult;
}

export function QueryResultsTable({ results }: QueryResultsTableProps) {
  const { columns, rows, rowCount } = results;

  if (!rows.length) {
    return (
      <div className="mt-4 p-4 bg-gray-50 rounded-md text-gray-600 text-center">
        No results found
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="bg-white rounded-md border">
        <div className="p-2 border-b bg-gray-50">
          <span className="text-sm text-gray-600">
            Results: {rowCount} {rowCount === 1 ? "row" : "rows"}
          </span>
        </div>
        <div className="overflow-auto max-h-[400px]">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column, index) => (
                  <TableHead key={index} className="whitespace-nowrap">
                    {column}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <TableCell key={colIndex} className="whitespace-nowrap">
                      {row[column] === null ? (
                        <span className="text-gray-400">NULL</span>
                      ) : (
                        String(row[column])
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

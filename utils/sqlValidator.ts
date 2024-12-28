import { Parser } from "node-sql-parser";
import { SQL_CONFIG } from "@/types";

export class SQLValidator {
  private parser: Parser;
  private allowedTables: Set<string>;

  constructor(allowedTables: string[]) {
    this.parser = new Parser();
    this.allowedTables = new Set(allowedTables);
  }

  public validate(query: string): { isValid: boolean; error?: string } {
    try {
      // Check query length
      if (query.length > SQL_CONFIG.MAX_QUERY_LENGTH) {
        return { isValid: false, error: "Query exceeds maximum length" };
      }

      // Parse the query
      const ast = this.parser.parse(query);

      // Validate tables
      const usedTables = this.extractTables(ast);
      const unauthorizedTables = usedTables.filter(
        (table) => !this.allowedTables.has(table),
      );

      if (unauthorizedTables.length > 0) {
        return {
          isValid: false,
          error: `Unauthorized tables: ${unauthorizedTables.join(", ")}`,
        };
      }

      // Validate commands
      const command: any = this.extractCommand(ast);
      if (!SQL_CONFIG.ALLOWED_COMMANDS.includes(command)) {
        return {
          isValid: false,
          error: `Command "${command}" is not allowed`,
        };
      }

      return { isValid: true };
    } catch (error) {
      return { isValid: false, error: "Invalid SQL syntax" };
    }
  }

  private extractTables(ast: any): string[] {
    // Implementation to extract all table names from AST
    // This is a simplified version
    const tables = new Set<string>();

    const traverse = (node: any) => {
      if (node && typeof node === "object") {
        if (node.table) {
          tables.add(node.table);
        }
        Object.values(node).forEach((value) => traverse(value));
      }
    };

    traverse(ast);
    return Array.from(tables);
  }

  private extractCommand(ast: any): string {
    return ast.type.toUpperCase();
  }
}

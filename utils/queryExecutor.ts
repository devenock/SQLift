import { sql } from "@vercel/postgres";
import { QueryResult, SQL_CONFIG } from "@/types";
import { SQLValidator } from "@/utils/sqlValidator";

export class QueryExecutor {
  private validator: SQLValidator;

  constructor(allowedTables: string[]) {
    this.validator = new SQLValidator(allowedTables);
  }

  public async execute(query: string): Promise<QueryResult> {
    // Validate query first
    const validation = this.validator.validate(query);
    if (!validation.isValid) {
      throw new Error(validation.error);
    }

    try {
      // Execute with timeout
      const result: any = await Promise.race([
        sql.query(query),
        new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error("Query timeout")),
            SQL_CONFIG.EXECUTION_TIMEOUT,
          ),
        ),
      ]);

      // Limit number of rows returned
      const limitedRows = result.rows.slice(0, SQL_CONFIG.MAX_ROWS_RETURNED);

      return {
        columns: result.fields.map((f: any) => f.name),
        rows: limitedRows,
        rowCount: result.rowCount,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

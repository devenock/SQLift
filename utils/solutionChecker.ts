import { QueryResult, TestCase } from "@/types";
import { QueryExecutor } from "@/utils/queryExecutor";

export class SolutionChecker {
  public async checkSolution(
    userQuery: string,
    testCases: TestCase[],
    executor: QueryExecutor,
  ): Promise<{ passed: boolean; failedTests: string[] }> {
    const failedTests: string[] = [];

    for (const testCase of testCases) {
      try {
        const userResult = await executor.execute(userQuery);
        const expectedResult = await executor.execute(testCase.validationQuery);

        if (!this.compareResults(userResult, expectedResult)) {
          failedTests.push(testCase.description);
        }
      } catch (error) {
        failedTests.push(testCase.description);
      }
    }

    return {
      passed: failedTests.length === 0,
      failedTests,
    };
  }

  private compareResults(
    userResult: QueryResult,
    expectedResult: QueryResult,
  ): boolean {
    // Implement detailed comparison logic here
    // This is a simplified version
    return (
      JSON.stringify(userResult.rows) === JSON.stringify(expectedResult.rows)
    );
  }
}

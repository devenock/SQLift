export interface Challenge {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  instruction: string;
  table: {
    name: string;
    columns: string[];
    sampleData: any[][];
  };
}

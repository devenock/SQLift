import { Challenge } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LightbulbIcon } from "lucide-react";

interface ChallengeDetailsProps {
  challenge: Challenge;
  onShowHint: () => void;
  currentHint: string | null;
}

export function ChallengeDetails({
  challenge,
  onShowHint,
  currentHint,
}: ChallengeDetailsProps) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{challenge.title}</CardTitle>
            <CardDescription>
              Difficulty: {challenge.difficulty.toLowerCase()}
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onShowHint}
            disabled={!challenge.hints.length}
          >
            <LightbulbIcon className="w-4 h-4 mr-2" />
            Need a hint?
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Description:</h3>
            <p className="text-gray-600">{challenge.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Available Table:</h3>
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              {challenge.tableName}
            </code>
          </div>

          {currentHint && (
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="text-sm font-medium text-blue-800 mb-1">Hint:</h3>
              <p className="text-blue-600">{currentHint}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

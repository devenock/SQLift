import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

interface ErrorFeedbackProps {
  error: string;
  failedTests?: string[];
}

export function ErrorFeedback({ error, failedTests }: ErrorFeedbackProps) {
  return (
    <Alert variant="destructive" className="mt-4">
      <AlertCircleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        <p className="mt-1">{error}</p>
        {failedTests && failedTests.length > 0 && (
          <div className="mt-2">
            <p className="font-medium">Failed test cases:</p>
            <ul className="list-disc list-inside mt-1">
              {failedTests.map((test, index) => (
                <li key={index} className="text-sm">
                  {test}
                </li>
              ))}
            </ul>
          </div>
        )}
      </AlertDescription>
    </Alert>
  );
}

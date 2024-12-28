import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircleIcon } from "lucide-react";

interface SuccessFeedbackProps {
  onNext?: () => void;
}

export function SuccessFeedback({ onNext }: SuccessFeedbackProps) {
  useEffect(() => {
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <Card className="bg-green-50 border-green-200">
      <CardHeader>
        <CardTitle className="text-green-800 flex items-center">
          <CheckCircleIcon className="w-6 h-6 mr-2" />
          Challenge Completed!
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-green-700 mb-4">
          Excellent work! Your solution is correct.
        </p>
        {onNext && (
          <button
            onClick={onNext}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Next Challenge →
          </button>
        )}
      </CardContent>
    </Card>
  );
}

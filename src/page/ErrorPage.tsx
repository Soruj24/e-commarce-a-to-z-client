import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  let errorTitle = "Unexpected Error";
  let errorMessage = "Something went wrong. Please try again later.";

  if (isRouteErrorResponse(error)) {
    errorTitle = `${error.status} ${error.statusText}`;
    errorMessage =
      error.data?.message || "The requested page couldn't be found.";
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Oops! Something went wrong
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>{errorTitle}</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={() => window.location.reload()}
              className="flex-1"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Page
            </Button>
            <Button onClick={() => navigate("/")} className="flex-1">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

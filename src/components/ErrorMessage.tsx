interface ErrorMessageProps {
  error: unknown;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className="text-center py-12 bg-red-50 rounded-lg">
      <p className="text-red-500 text-lg font-medium">
        {typeof error === "object" &&
        error !== null &&
        "data" in error &&
        typeof (error as { data?: unknown }).data === "object" &&
        (error as { data?: { message?: unknown } }).data &&
        "message" in (error as { data: { message?: unknown } }).data
          ? String(
              (error as { data: { message?: unknown } }).data.message
            )
          : "Error loading products"}
      </p>
      <p className="text-muted-foreground mt-2">
        Please refresh the page or try again later
      </p>
    </div>
  );
}
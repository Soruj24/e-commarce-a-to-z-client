interface EmptyStateProps {
  searchTerm: string;
}

export function EmptyState({ searchTerm }: EmptyStateProps) {
  return (
    <div className="text-center py-12 bg-gray-50 rounded-lg">
      <p className="text-gray-500 text-lg">
        {searchTerm ? "No matching products found" : "No products available"}
      </p>
      <p className="text-muted-foreground mt-2">
        {searchTerm ? "Try adjusting your search" : "Check back later for new products"}
      </p>
    </div>
  );
}
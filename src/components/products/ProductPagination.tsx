import { Button } from "@/components/ui/button";

interface ProductPaginationProps {
  page: number;
  totalPages: number;
  totalProducts: number;
  limit: number;
  onPageChange: (page: number) => void;
}

export function ProductPagination({
  page,
  totalPages,
  totalProducts,
  limit,
  onPageChange,
}: ProductPaginationProps) {
  const startItem = (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, totalProducts);

  return (
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-sm text-muted-foreground">
        Showing {startItem}-{endItem} of {totalProducts} products
      </div>
      <div className="flex space-x-2">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          Previous
        </Button>
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const pageNum = Math.max(1, Math.min(totalPages - 4, page - 2)) + i;
          return (
            <Button
              key={pageNum}
              variant={page === pageNum ? 'default' : 'outline'}
              onClick={() => onPageChange(pageNum)}
            >
              {pageNum}
            </Button>
          );
        })}
        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
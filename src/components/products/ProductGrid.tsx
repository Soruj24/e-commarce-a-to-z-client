import type { Product } from "@/services/productApi";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  limit: number;
}

export function ProductGrid({ products, isLoading, limit }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {[...Array(limit)].map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {products.map((product) => (
        <ProductCard
          key={String(product._id)}
          product={{ ...product, _id: String(product._id) }}
        />
      ))}
    </div>
  );
}

function ProductSkeleton() {
  return (
    <div
      className="h-80 w-full rounded-lg bg-gray-200 animate-pulse"
      data-testid="product-skeleton"
    />
  );
}

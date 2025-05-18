import { useState } from "react";
import { useGetProductsQuery } from "@/services/productApi";
import { ProductSearch } from "@/components/products/ProductSearch";
import { ProductSort } from "@/components/products/ProductSort";
import { ProductLimitSelector } from "@/components/products/ProductLimitSelector";
import { ErrorMessage } from "@/components/ErrorMessage";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductPagination } from "@/components/products/ProductPagination";
import { EmptyState } from "@/components/EmptyState";

export function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortField, setSortField] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const { data, error, isLoading, isError } = useGetProductsQuery({
    page,
    limit,
    search: searchTerm,
    sort: sortField,
    order: sortOrder,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
        Our Products
      </h1>

      <div className="mb-8 space-y-4 md:space-y-0 md:flex md:space-x-4">
        <ProductSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSubmit={handleSearch}
        />
        <ProductSort
          sortField={sortField}
          sortOrder={sortOrder}
          onFieldChange={(value) => {
            setSortField(value);
            setPage(1);
          }}
          onOrderChange={(value) => {
            setSortOrder(value);
            setPage(1);
          }}
        />
      </div>

      <ProductLimitSelector
        limit={limit}
        onChange={(value) => {
          setLimit(Number(value));
          setPage(1);
        }}
      />

      {isError ? (
        <ErrorMessage error={error} />
      ) : data?.payload?.products?.length ? (
        <>
          <ProductGrid
            products={data.payload.products}
            isLoading={isLoading}
            limit={limit}
          />
          <ProductPagination
            page={page}
            totalPages={data.payload.pagination.totalPage}
            totalProducts={data.payload.totalProducts}
            limit={limit}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <EmptyState searchTerm={searchTerm} />
      )}
    </div>
  );
}

export default Products;

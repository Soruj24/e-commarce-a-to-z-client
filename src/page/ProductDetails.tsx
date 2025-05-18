import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetProductQuery } from "@/services/productApi";
import { ErrorMessage } from "@/components/ErrorMessage";

export function ProductDetails() {
  const { productId } = useParams();
  console.log(productId);
  const { data, isLoading, isError } = useGetProductQuery(productId!, {
    skip: !productId,
  });
  console.log(data);
  if (!productId) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-500 text-lg font-medium">
          <ErrorMessage error="Product ID not found" />
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-96 w-full rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-500 text-lg font-medium">
          <ErrorMessage error="Error loading product details" />
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={data?.image}
            alt={data?.name}
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{data?.name}</h1>
          <p className="text-2xl font-semibold text-primary mb-4">
            ${data?.price}
          </p>
          <p className="text-gray-600 mb-6">{data?.description}</p>

          <div className="flex space-x-4">
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark">
              Add to Cart
            </button>
            <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary-light">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

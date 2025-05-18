import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <CardHeader>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{product.name}</CardTitle>
        {product.description && (
          <CardDescription>{product.description}</CardDescription>
        )}
        <p className="mt-2 font-bold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to={`api/product/${product._id}`}>
          <Button variant="outline">Details</Button>
        </Link>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;

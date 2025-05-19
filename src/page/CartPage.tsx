import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2, ArrowLeft, ShoppingCart } from "lucide-react";
import {
  selectCartItems,
  selectTotalItems,
  selectSubtotal,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { formatCurrency } from "@/lib/formatCurrency";

export function CartPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const totalItems = useAppSelector(selectTotalItems);
  const subtotal = useAppSelector(selectSubtotal);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
        <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">
          Looks like you haven't added any items yet
        </p>
        <Button asChild>
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" asChild className="mr-4">
          <Link to="/products">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Continue Shopping
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Your Cart ({totalItems})</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border divide-y">
            {cartItems.map((item) => (
              <div key={item.id} className="p-4 flex">
                <Link
                  to={`/products/${item.id}`}
                  className="flex-shrink-0 mr-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-md object-cover"
                  />
                </Link>

                <div className="flex-1">
                  <div className="flex justify-between">
                    <Link
                      to={`/products/${item.id}`}
                      className="font-medium hover:text-primary"
                    >
                      {item.name}
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>

                  {/* <p className="text-muted-foreground text-sm mt-1">
                    {item.category?.name || "Uncategorized"}
                  </p> */}

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center border rounded-md">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8"
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: Math.max(1, item.quantity - 1),
                            })
                          )
                        }
                      >
                        -
                      </Button>
                      <span className="px-4 text-sm font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8"
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: item.quantity + 1,
                            })
                          )
                        }
                      >
                        +
                      </Button>
                    </div>

                    <p className="font-medium">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              onClick={() => dispatch(clearCart())}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>{formatCurrency(subtotal * 0.1)}</span>
              </div>

              <div className="border-t pt-4 mt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>{formatCurrency(subtotal * 1.1)}</span>
              </div>
            </div>

            <Button className="w-full mt-6" size="lg">
              Proceed to Checkout
            </Button>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              By placing your order, you agree to our Terms of Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

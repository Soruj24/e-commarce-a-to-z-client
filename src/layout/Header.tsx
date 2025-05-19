import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Profile } from "@/page/ProfilePage";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2 mr-8">
            <span className="text-xl font-bold">ShopCart</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center space-x-4">
          {/* Cart Button */}
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-xs text-white flex items-center justify-center">
                3
              </span>
            </Button>
          </Link>

          {/* Profile */}
          <div className="hidden md:block">
            <Profile />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="container px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t">
            <Profile />
          </div>
        </div>
      </div>
    </header>
  );
}

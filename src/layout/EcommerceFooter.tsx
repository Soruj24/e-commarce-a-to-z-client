import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Customer Service",
    links: ["Contact Us", "Order Tracking", "Returns & Exchanges", "FAQs"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Blog"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Accessibility"],
  },
];

const paymentMethods = [
  {
    name: "Visa",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
  },
  {
    name: "Mastercard",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  },
  {
    name: "PayPal",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  },
  {
    name: "Apple Pay",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
];

export function EcommerceFooter() {
  return (
    <footer className="bg-background border-t px-4 sm:px-6 lg:px-8 w-full mt-auto">
      <div className="mx-auto max-w-7xl py-12 space-y-10">
        {/* Trust Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-semibold mb-4">Fast Delivery</h4>
            <p className="text-sm text-muted-foreground">
              Get your orders in no time
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Free Returns</h4>
            <p className="text-sm text-muted-foreground">
              Hassle-free returns within 30 days
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Secure Payments</h4>
            <p className="text-sm text-muted-foreground">
              100% secure payment protection
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">24/7 Support</h4>
            <p className="text-sm text-muted-foreground">
              We’re here to help anytime
            </p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-y py-8">
          <div>
            <h3 className="text-lg font-semibold">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm text-muted-foreground">
              Get the latest updates and offers.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row w-full max-w-md gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
            <Button type="submit" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Youtube" className="hover:text-primary">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          {paymentMethods.map((method) => (
            <img
              key={method.name}
              src={method.icon}
              alt={method.name}
              className="h-6 object-contain"
            />
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground pt-6 border-t">
          &copy; {new Date().getFullYear()} Your Company, Inc. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

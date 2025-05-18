import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Have questions or feedback? We'd love to hear from you.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 rounded border"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 rounded border"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1">Subject</label>
              <input
                id="subject"
                type="text"
                className="w-full px-4 py-2 rounded border"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 rounded border"
                required
              ></textarea>
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">support@shopcart.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-muted-foreground">
                  123 Commerce Street<br />
                  San Francisco, CA 94103
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-medium mb-2">Business Hours</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>Monday - Friday: 9am - 6pm PST</li>
                <li>Saturday: 10am - 4pm PST</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-16 bg-gray-100 rounded-lg aspect-video">
        {/* Map placeholder - replace with your map component */}
      </section>
    </div>
  );
}
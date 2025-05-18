import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "E-commerce expert with 10+ years of experience building successful online stores.",
      image: "/team/alex.jpg",
    },
    {
      name: "Sarah Chen",
      role: "Head of Design",
      bio: "Passionate about creating intuitive user experiences that drive conversions.",
      image: "/team/sarah.jpg",
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in performant e-commerce solutions.",
      image: "/team/michael.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Founded in 2020, we're on a mission to make online shopping seamless,
          enjoyable, and accessible to everyone.
        </p>
      </section>

      <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-muted-foreground mb-6">
            We combine cutting-edge technology with exceptional customer service
            to deliver an unmatched shopping experience.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
              <span>Curated selection of high-quality products</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
              <span>Fast and reliable shipping worldwide</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
              <span>Customer-first return policy</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg aspect-video"></div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      <section className="bg-primary/10 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get updates on new products, exclusive deals, and shopping tips.
        </p>
        <div className="flex max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 rounded border"
          />
          <Button>Subscribe</Button>
        </div>
      </section>
    </div>
  );
}

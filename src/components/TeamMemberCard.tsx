import { Button } from "@/components/ui/button";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export function TeamMemberCard({ name, role, bio, image }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
      <div className="aspect-square bg-gray-200 relative">
        {/* Replace with actual image */}
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-primary mb-2">{role}</p>
        <p className="text-muted-foreground mb-4">{bio}</p>
        <Button variant="outline" size="sm">
          Connect
        </Button>
      </div>
    </div>
  );
}
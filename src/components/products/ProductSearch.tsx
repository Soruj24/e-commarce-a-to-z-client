import { Input } from "@/components/ui/input";
 
interface ProductSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ProductSearch({ 
  searchTerm, 
  onSearchChange, 
  onSubmit 

}: ProductSearchProps) {
  return (
    <form onSubmit={onSubmit} className="flex-1">
      <Input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full"
      />
    </form>
  );
}
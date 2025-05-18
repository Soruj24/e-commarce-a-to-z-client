import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductSortProps {
  sortField: string;
  sortOrder: 'asc' | 'desc';
  onFieldChange: (value: string) => void;
  onOrderChange: (value: 'asc' | 'desc') => void;
}

export function ProductSort({ 
  sortField, 
  sortOrder, 
  onFieldChange, 
  onOrderChange 
}: ProductSortProps) {
  return (
    <div className="flex space-x-2">
      <Select value={sortField} onValueChange={onFieldChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="price">Price</SelectItem>
          <SelectItem value="createdAt">Date Added</SelectItem>
        </SelectContent>
      </Select>

      <Select value={sortOrder} onValueChange={onOrderChange}>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">Ascending</SelectItem>
          <SelectItem value="desc">Descending</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductLimitSelectorProps {
  limit: number;
  onChange: (value: string) => void;
}

export function ProductLimitSelector({ limit, onChange }: ProductLimitSelectorProps) {
  return (
    <div className="mb-4 flex items-center space-x-2">
      <span className="text-sm text-muted-foreground">Results per page:</span>
      <Select value={String(limit)} onValueChange={onChange}>
        <SelectTrigger className="w-[80px]">
          <SelectValue placeholder={limit} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="50">50</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
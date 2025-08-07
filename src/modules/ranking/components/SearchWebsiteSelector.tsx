import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

export type SearchWebsite = "all" | "reddit" | "hackernews" | "devto";

interface SearchWebsiteSelectorProps {
  value?: SearchWebsite;
  onValueChange?: (value: SearchWebsite) => void;
}

const websiteOptions = [
  { value: "all", label: "All Websites" },
  { value: "reddit", label: "Reddit" },
  { value: "hackernews", label: "Hackernews" },
  { value: "devto", label: "Dev.to" },
] as const;

export const SearchWebsiteSelector = ({
  value,
  onValueChange,
}: SearchWebsiteSelectorProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-64 h-14 bg-white border-0 shadow-lg rounded-lg">
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4 text-gray-500" />
            <SelectValue placeholder="All Websites" />
          </div>
        </SelectTrigger>
        <SelectContent>
          {websiteOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

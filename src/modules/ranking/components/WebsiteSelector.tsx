import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

export type Website = "all" | "reddit" | "hackernews" | "devto";

interface WebsiteSelectorProps {
  value?: Website;
  onValueChange?: (value: Website) => void;
}

const websiteOptions = [
  { value: "all", label: "All Websites" },
  { value: "reddit", label: "Reddit" },
  { value: "hackernews", label: "Hackernews" },
  { value: "devto", label: "Dev.to" },
] as const;

export const WebsiteSelector = ({
  value,
  onValueChange,
}: WebsiteSelectorProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-[200px] bg-gray-50 border-gray-200">
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

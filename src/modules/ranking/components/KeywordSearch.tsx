import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface KeywordSearchProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const KeywordSearch = ({ value, onValueChange }: KeywordSearchProps) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <Input
        type="text"
        placeholder="키워드를 입력하여 게시물을 검색하세요..."
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="pl-12 pr-4 h-14 text-lg bg-white text-gray-900 border-0 shadow-lg rounded-lg"
      />
    </div>
  );
};

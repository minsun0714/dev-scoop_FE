import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface KeywordSearchProps {
  value: string;
  onValueChange: (value: string) => void;
  onSearch: () => void;
}

export const KeywordSearch = ({
  value,
  onValueChange,
  onSearch,
}: KeywordSearchProps) => {
  return (
    <div className="flex w-full space-x-4">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="키워드를 입력하여 게시물을 검색하세요..."
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          className="pl-12 pr-4 !h-[36px] text-lg bg-white text-gray-900 border-0 shadow-lg rounded-lg"
        />
      </div>
      <Button
        onClick={onSearch}
        className="!h-[36px] px-6 bg-teal-500 hover:bg-teal-600 text-white shadow-lg rounded-lg font-semibold"
      >
        검색
      </Button>
    </div>
  );
};

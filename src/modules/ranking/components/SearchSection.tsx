import { KeywordSearch } from "./KeywordSearch";
import { SearchWebsiteSelector, SearchWebsite } from "./SearchWebsiteSelector";

interface SearchSectionProps {
  searchKeyword: string;
  onSearchKeywordChange: (value: string) => void;
  selectedWebsite: SearchWebsite;
  onWebsiteChange: (website: SearchWebsite) => void;
  onSearch: () => void;
}

export const SearchSection = ({
  searchKeyword,
  onSearchKeywordChange,
  selectedWebsite,
  onWebsiteChange,
  onSearch,
}: SearchSectionProps) => {
  return (
    <div className="text-center py-16 bg-gradient-to-r from-sky-100 to-emerald-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">
          어떤 기술 키워드를 찾고 계신가요?
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          키워드를 입력하면 관련 게시물을 찾아드립니다
        </p>

        <div className="flex space-x-4">
          <SearchWebsiteSelector
            value={selectedWebsite}
            onValueChange={onWebsiteChange}
          />

          <KeywordSearch
            value={searchKeyword}
            onValueChange={onSearchKeywordChange}
            onSearch={onSearch}
          />
        </div>
      </div>
    </div>
  );
};

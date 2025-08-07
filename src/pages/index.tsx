import { DefaultLayout } from "@/modules/layout/DefaultLayout";
import { Box } from "@radix-ui/themes";
import { RankingList } from "@/modules/ranking/components/RankingList";
import { SearchSection } from "@/modules/ranking/components/SearchSection";
import { useState } from "react";
import { SearchWebsite } from "@/modules/ranking/components/SearchWebsiteSelector";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchWebsite, setSearchWebsite] = useState<SearchWebsite>("all");

  const handleSearch = () => {
    if (!searchKeyword.trim()) return;

    router.push({
      pathname: "/search",
      query: {
        keyword: searchKeyword,
        source: searchWebsite,
        size: 10,
        page: 1,
      },
    });
  };

  return (
    <DefaultLayout>
      <Box>
        {/* 검색 섹션 */}
        <SearchSection
          searchKeyword={searchKeyword}
          onSearchKeywordChange={setSearchKeyword}
          selectedWebsite={searchWebsite}
          onWebsiteChange={setSearchWebsite}
          onSearch={handleSearch}
        />

        {/* 랭킹 테이블 */}
        <div className="max-w-6xl mx-auto mt-8">
          <RankingList />
        </div>
      </Box>
    </DefaultLayout>
  );
}

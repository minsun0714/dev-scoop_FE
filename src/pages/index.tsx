import { DefaultLayout } from "@/modules/layout/DefaultLayout";
import { Box, Text } from "@radix-ui/themes";
import { RankingList } from "@/modules/ranking/components/RankingList";
import { SearchSection } from "@/modules/ranking/components/SearchSection";
import { useState } from "react";
import { Website } from "@/modules/ranking/components/WebsiteSelector";

export default function Home() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchWebsite, setSearchWebsite] = useState<Website>("all");

  return (
    <DefaultLayout>
      <Box>
        {/* 검색 섹션 */}
        <SearchSection
          searchKeyword={searchKeyword}
          onSearchKeywordChange={setSearchKeyword}
          selectedWebsite={searchWebsite}
          onWebsiteChange={setSearchWebsite}
        />

        {/* 랭킹 테이블 */}
        <div className="max-w-6xl mx-auto mt-8">
          <RankingList />
        </div>
      </Box>
    </DefaultLayout>
  );
}

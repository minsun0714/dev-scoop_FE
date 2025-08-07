import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useRanking } from "@/modules/ranking/hooks/useRanking";
import { WebsiteSelector, Website } from "./WebsiteSelector";
import { RankingTable } from "./RankingTable";
import { RankingTableSkeleton } from "./RankingTableSkeleton";

export const RankingList = () => {
  const router = useRouter();
  const [selectedWebsite, setSelectedWebsite] = useState<Website>("all");

  // URL query string에서 source 파라미터 읽기
  useEffect(() => {
    const sourceFromQuery = router.query.source as Website;
    if (
      sourceFromQuery &&
      ["all", "reddit", "hackernews", "devto"].includes(sourceFromQuery)
    ) {
      setSelectedWebsite(sourceFromQuery);
    } else {
      setSelectedWebsite("all");
    }
  }, [router.query.source]);

  // 웹사이트 선택 시 URL 업데이트
  const handleWebsiteChange = (website: Website) => {
    setSelectedWebsite(website);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, source: website },
    });
  };

  // 선택된 source로 랭킹 데이터 가져오기
  const { data: ranking, isLoading, error } = useRanking(selectedWebsite);

  // 헤더 부분은 항상 렌더링
  const renderHeader = () => (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold">인기 키워드 랭킹</h2>
      <WebsiteSelector
        value={selectedWebsite}
        onValueChange={handleWebsiteChange}
      />
    </div>
  );

  // 테이블 부분만 로딩 상태 처리
  const renderTable = () => {
    if (isLoading) {
      return <RankingTableSkeleton />;
    }

    if (error) {
      return (
        <div className="flex items-center justify-center p-8">
          <div className="text-lg text-red-500">
            랭킹 데이터를 불러오는데 실패했습니다
          </div>
        </div>
      );
    }

    if (!ranking || ranking.length === 0) {
      return (
        <div className="flex items-center justify-center p-8">
          <div className="text-lg text-gray-500">
            {selectedWebsite === "all"
              ? "랭킹 데이터가 없습니다"
              : `${selectedWebsite}에서 아직 데이터가 없습니다`}
          </div>
        </div>
      );
    }

    return <RankingTable ranking={ranking} />;
  };

  return (
    <div className="p-6">
      {renderHeader()}
      {renderTable()}
    </div>
  );
};

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { DefaultLayout } from "@/modules/layout/DefaultLayout";
import { Box } from "@radix-ui/themes";
import { SearchSection } from "@/modules/ranking/components/SearchSection";
import { SearchWebsite } from "@/modules/ranking/components/SearchWebsiteSelector";
import { SearchParams } from "@/types";
import { useSearch } from "@/modules/search/hooks/useSearch";
import { Pagination } from "@/modules/search/components/Pagination";

export default function SearchPage() {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchWebsite, setSearchWebsite] = useState<SearchWebsite>("all");

  // URL query string에서 검색 파라미터 읽기
  useEffect(() => {
    const keyword = router.query.keyword as string;
    const source = router.query.source as SearchWebsite;

    if (keyword) setSearchKeyword(keyword);
    if (source && ["all", "reddit", "hackernews", "devto"].includes(source)) {
      setSearchWebsite(source);
    }
  }, [router.query]);

  // 검색 파라미터 구성 (URL query string에서만 가져옴)
  const searchParams: SearchParams = {
    keyword: (router.query.keyword as string) || "",
    source: (router.query.source as SearchWebsite) || "all",
    size: parseInt(router.query.size as string) || 10,
    page: parseInt(router.query.page as string) || 1,
  };

  // 검색 데이터 가져오기
  const { data: searchData, isLoading, error } = useSearch(searchParams);

  // 검색 실행
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

  // 페이지 변경
  const handlePageChange = (page: number) => {
    router.push({
      pathname: "/search",
      query: {
        ...router.query,
        page: page,
      },
    });
  };

  // 총 페이지 수 계산
  const totalPages = searchData
    ? Math.ceil(searchData.total / searchParams.size)
    : 0;

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

        {/* 검색 결과 */}
        <div className="max-w-6xl mx-auto mt-8 px-4">
          {isLoading && (
            <div className="text-center py-12">
              <div className="text-lg">검색 중...</div>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="text-lg text-red-500">
                검색 중 오류가 발생했습니다
              </div>
            </div>
          )}

          {searchData && (
            <div>
              <div className="text-sm text-gray-500 mb-4">
                {searchData.total}개의 검색 결과
              </div>

              {searchData.content.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-lg text-gray-500">
                    검색 결과가 없습니다
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    {searchData.content.map((item) => {
                      // UTC를 KST로 변환 (UTC+9)
                      const utcDate = new Date(item.createdAt);
                      const kstDate = new Date(
                        utcDate.getTime() + 9 * 60 * 60 * 1000
                      );
                      const formattedDate = kstDate
                        .toISOString()
                        .split("T")[0]
                        .replace(/-/g, ".");

                      const handleCardClick = () => {
                        window.open(item.url, "_blank");
                      };

                      return (
                        <div
                          key={item.id}
                          className="p-4 bg-white rounded-lg shadow border relative transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                          onClick={handleCardClick}
                        >
                          <h3 className="text-lg font-semibold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 mb-2">{item.content}</p>
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-500">
                              {item.source}
                            </div>
                            <div className="text-sm text-gray-500">
                              {formattedDate}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Pagination */}
                  <Pagination
                    currentPage={searchParams.page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </>
              )}
            </div>
          )}
        </div>
      </Box>
    </DefaultLayout>
  );
}

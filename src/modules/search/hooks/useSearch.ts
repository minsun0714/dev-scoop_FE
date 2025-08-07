import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/constants";
import { SearchParams, SearchResponse } from "@/types";

// 검색 데이터를 가져오는 함수
const fetchSearch = async (params: SearchParams): Promise<SearchResponse> => {
  const url = API_ENDPOINTS.SEARCH(params);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("검색 데이터를 가져오는데 실패했습니다");
  }

  return response.json();
};

// 검색 데이터를 사용하는 훅
export const useSearch = (params: SearchParams) => {
  return useQuery({
    queryKey: ["search", params],
    queryFn: () => fetchSearch(params),
    staleTime: 0, // 즉시 stale로 처리하여 항상 새로운 데이터 fetch
    gcTime: 0, // 캐시 시간을 0으로 설정하여 캐시 비활성화
    refetchOnWindowFocus: true, // 윈도우 포커스 시 refetch
    refetchOnMount: true, // 컴포넌트 마운트 시 refetch
    enabled: !!params.keyword.trim(), // 키워드가 있을 때만 실행
  });
};

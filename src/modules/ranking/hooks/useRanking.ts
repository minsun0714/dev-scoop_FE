import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/constants";
import { RankingResponse } from "@/types";

// 랭킹 데이터를 가져오는 함수
const fetchRanking = async (source: string): Promise<RankingResponse> => {
  const url =
    source === "all"
      ? API_ENDPOINTS.RANKING
      : API_ENDPOINTS.RANKING_WITH_SOURCE(source);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("랭킹 데이터를 가져오는데 실패했습니다");
  }

  return response.json();
};

// 랭킹 데이터를 사용하는 훅
export const useRanking = (source: string = "all") => {
  return useQuery({
    queryKey: ["ranking", source],
    queryFn: () => fetchRanking(source),
    staleTime: 0, // 즉시 stale로 처리하여 항상 새로운 데이터 fetch
    gcTime: 0, // 캐시 시간을 0으로 설정하여 캐시 비활성화
    refetchOnWindowFocus: true, // 윈도우 포커스 시 refetch
    refetchOnMount: true, // 컴포넌트 마운트 시 refetch
  });
};

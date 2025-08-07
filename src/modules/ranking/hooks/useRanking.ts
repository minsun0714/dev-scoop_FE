import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/constants";
import { RankingResponse } from "@/types";

// 랭킹 데이터를 가져오는 함수
const fetchRanking = async (): Promise<RankingResponse> => {
  const response = await fetch(API_ENDPOINTS.RANKING);

  if (!response.ok) {
    throw new Error("랭킹 데이터를 가져오는데 실패했습니다");
  }

  return response.json();
};

// 랭킹 데이터를 사용하는 훅
export const useRanking = () => {
  return useQuery({
    queryKey: ["ranking"],
    queryFn: fetchRanking,
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
  });
};

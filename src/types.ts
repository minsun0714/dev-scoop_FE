// 랭킹 아이템 타입
export interface RankingItem {
  keyword: string;
  todayCount: number;
  yesterdayCount: number;
  score: number;
}

// 랭킹 응답 타입
export type RankingResponse = RankingItem[];

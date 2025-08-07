// 랭킹 아이템 타입
export interface RankingItem {
  keyword: string;
  todayCount: number;
  yesterdayCount: number;
  score: number;
}

// 랭킹 응답 타입
export type RankingResponse = RankingItem[];

// 검색 파라미터 타입
export interface SearchParams {
  keyword: string;
  source: "all" | "reddit" | "hackernews" | "devto";
  size: number;
  page: number;
}

// 검색 결과 아이템 타입
export interface SearchResultItem {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  source: string;
  url: string;
  keywords: string[];
}

// 검색 결과 응답 타입 (실제 API 응답 구조)
export interface SearchResponse {
  content: SearchResultItem[];
  total: number;
  page: number;
  size: number;
}

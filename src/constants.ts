// API 엔드포인트
export const API_ENDPOINTS = {
  RANKING: "https://api.dev-scoop.click/ranking",
  RANKING_WITH_SOURCE: (source: string) =>
    `https://api.dev-scoop.click/ranking?source=${source}`,
  SEARCH: (params: {
    keyword: string;
    source: string;
    size: number;
    page: number;
  }) =>
    `https://api.dev-scoop.click/search?keyword=${encodeURIComponent(
      params.keyword
    )}&source=${params.source}&size=${params.size}&page=${params.page}`,
} as const;

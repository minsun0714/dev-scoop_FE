// API 엔드포인트
export const API_ENDPOINTS = {
  RANKING: "https://api.dev-scoop.click/ranking",
  RANKING_WITH_SOURCE: (source: string) =>
    `https://api.dev-scoop.click/ranking?source=${source}`,
} as const;

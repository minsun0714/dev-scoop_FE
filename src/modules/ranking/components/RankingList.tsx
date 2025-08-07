import { useRanking } from "@/modules/ranking/hooks/useRanking";

export const RankingList = () => {
  const { data: ranking, isLoading, error } = useRanking();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg">랭킹 데이터를 불러오는 중...</div>
      </div>
    );
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
        <div className="text-lg">랭킹 데이터가 없습니다</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">인기 키워드 랭킹</h2>
      <div className="space-y-4">
        {ranking.map((item, index) => (
          <div
            key={item.keyword}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border"
          >
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <div className="font-semibold text-lg">{item.keyword}</div>
                <div className="text-sm text-gray-500">
                  오늘: {item.todayCount}회 | 어제: {item.yesterdayCount}회
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">점수</div>
              <div className="font-bold text-lg text-blue-600">
                {item.score.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

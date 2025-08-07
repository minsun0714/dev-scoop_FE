import { useRanking } from "@/modules/ranking/hooks/useRanking";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

  // 증가율 계산 함수
  const calculateGrowthRate = (todayCount: number, yesterdayCount: number) => {
    const growthRate = ((todayCount - yesterdayCount) / todayCount) * 100;
    return growthRate.toFixed(0) + "%";
  };

  return (
    <div className="p-6">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>Keyword</TableHead>
              <TableHead className="w-[120px]">증가율</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ranking.map((item, index) => (
              <TableRow key={item.keyword}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{item.keyword}</TableCell>
                <TableCell>
                  {calculateGrowthRate(item.todayCount, item.yesterdayCount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

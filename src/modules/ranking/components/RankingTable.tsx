import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RankingResponse } from "@/types";

interface RankingTableProps {
  ranking: RankingResponse;
}

export const RankingTable = ({ ranking }: RankingTableProps) => {
  // 증가율 계산 함수
  const calculateGrowthRate = (todayCount: number, yesterdayCount: number) => {
    const growthRate = ((todayCount - yesterdayCount) / todayCount) * 100;
    return growthRate.toFixed(0) + "%";
  };

  return (
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
  );
};

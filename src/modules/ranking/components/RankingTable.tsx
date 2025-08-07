import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RankingResponse } from "@/types";
import { useRouter } from "next/router";
import { Website } from "./WebsiteSelector";

interface RankingTableProps {
  ranking: RankingResponse;
  selectedSource: Website;
}

export const RankingTable = ({
  ranking,
  selectedSource,
}: RankingTableProps) => {
  const router = useRouter();

  // 증가율 계산 함수
  const calculateGrowthRate = (todayCount: number, yesterdayCount: number) => {
    const growthRate = ((todayCount - yesterdayCount) / todayCount) * 100;
    return growthRate.toFixed(0) + "%";
  };

  // 키워드 클릭 시 검색 페이지로 이동
  const handleKeywordClick = (keyword: string) => {
    router.push({
      pathname: "/search",
      query: {
        keyword: keyword,
        source: selectedSource,
        size: 10,
        page: 1,
      },
    });
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
            <TableRow
              key={item.keyword}
              onClick={() => handleKeywordClick(item.keyword)}
              className="hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="hover:text-blue-600">
                {item.keyword}
              </TableCell>
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

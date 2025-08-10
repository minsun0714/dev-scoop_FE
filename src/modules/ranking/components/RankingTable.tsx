import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { RankingResponse } from "@/types";
import { useRouter } from "next/router";
import { Website } from "./WebsiteSelector";

// Badge 컬러맵 정의
const badgeColorMap = {
  Spike: "bg-red-100 text-red-800 border-red-200",
  New: "bg-green-100 text-green-800 border-green-200",
  Rising: "bg-blue-100 text-blue-800 border-blue-200",
} as const;

interface RankingTableProps {
  ranking: RankingResponse;
  selectedSource: Website;
}

export const RankingTable = ({
  ranking,
  selectedSource,
}: RankingTableProps) => {
  const router = useRouter();

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
            <TableHead className="w-[120px]">Badge</TableHead>
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
                <Badge
                  className={badgeColorMap[item.badge] || badgeColorMap.Spike}
                >
                  {item.badge}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

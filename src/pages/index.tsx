import { DefaultLayout } from "@/modules/layout/DefaultLayout";
import { Box, Text } from "@radix-ui/themes";
import { RankingList } from "@/modules/ranking/components/RankingList";

export default function Home() {
  return (
    <DefaultLayout>
      <Box>
        <RankingList />
      </Box>
    </DefaultLayout>
  );
}

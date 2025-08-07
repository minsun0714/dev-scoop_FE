import { DefaultLayout } from "@/modules/layout/DefaultLayout";
import { Box, Text } from "@radix-ui/themes";
import { RankingList } from "@/modules/ranking/components/RankingList";

export default function Home() {
  return (
    <DefaultLayout>
      <Box>
        <Text size="8" weight="bold" mb="4">
          Dev Scoop
        </Text>
        <RankingList />
      </Box>
    </DefaultLayout>
  );
}

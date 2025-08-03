import { DefaultLayout } from "@/modules/layout/DefaultLayout";
import { Box, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <DefaultLayout>
      <Box>
        <Text>Hello World</Text>
      </Box>
    </DefaultLayout>
  );
}

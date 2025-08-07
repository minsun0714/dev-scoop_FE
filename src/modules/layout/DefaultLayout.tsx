import GNB from "@/modules/gnb/components/GNB";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <GNB />
      <main className="max-w-6xl mx-auto pt-16">{children}</main>
    </div>
  );
};

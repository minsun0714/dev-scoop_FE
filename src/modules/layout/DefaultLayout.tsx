import GNB from "@/modules/gnb/components/GNB";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <GNB />
      <main className="py-16">{children}</main>
    </div>
  );
};

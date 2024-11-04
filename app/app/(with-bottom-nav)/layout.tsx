import AppBotNavbar from "@/components/app/AppBotNavbar";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      <AppBotNavbar />
    </>
  );
};

export default AppLayout;

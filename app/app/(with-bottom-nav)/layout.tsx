import AppBotNavbar from "../(app-components)/AppBotNavbar";

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

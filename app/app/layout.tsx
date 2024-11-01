import AppBotNavbar from "./(app-components)/AppBotNavbar";

type Props = {};

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

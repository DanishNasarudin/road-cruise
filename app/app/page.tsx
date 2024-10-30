import AppBotNavbar from "./(app-components)/AppBotNavbar";
import AppTopNavbar from "./(app-components)/AppTopNavbar";

type Props = {};

const MainApp = (props: Props) => {
  return (
    <main className="relative">
      <AppTopNavbar />

      <AppBotNavbar />
    </main>
  );
};

export default MainApp;

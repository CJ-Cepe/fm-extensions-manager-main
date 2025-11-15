import HeadBar from "./components/HeadBar";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <>
      <header className="header">
        <HeadBar />
      </header>

      <main className="main">
        <MainContent />
      </main>
    </>
  );
}

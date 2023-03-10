import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>

        <main>
          <Dictionary defaultKeyword="countryside" />
        </main>

        <footer className="App-footer m-4">
          <small>
            This project was coded by Olga Dietiuk Kahraman - 2023 and it is{" "}
            <a
              href="https://github.com/olgakahraman/dictionary-react-app"
              target="_blank"
              title="GitHub"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

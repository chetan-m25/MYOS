import Cli from "react-console-emulator";
import Window from "../../components/window/Window";
import "./terminal.scss";

const Terminal = ({ windowName, setWindowsState }) => {
  return (
    <Window windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Cli
          commands={{
            echo: {
              description: "Echo a passed string.",
              usage: "echo <string>",
              fn: (...args) => args.join(" "),
            },
            about: {
              description: "Show info about this portfolio.",
              usage: "about",
              fn: () =>
                "\n\u2728 Welcome to MYOS!\nThis portfolio showcases Chetan's work, skills, and projects.\n",
            },
            contact: {
              description: "Show contact information.",
              usage: "contact",
              fn: () =>
                "\n\u260E Email: chetan@example.com\n\uD83D\uDC64 LinkedIn: linkedin.com/in/chetan\n\uD83D\uDCBB GitHub: github.com/chetan",
            },
            projects: {
              description: "List portfolio projects.",
              usage: "projects",
              fn: () =>
                "\n\uD83D\uDCDA Projects:\n- MYOS\n- ResumeApp\n- NoteApp\n- Spotify Clone\n- CLI Cli\n",
            },
            skills: {
              description: "Show skills.",
              usage: "skills",
              fn: () =>
                "\n\uD83D\uDC68\u200D\uD83D\uDCBB Skills:\n- React\n- JavaScript\n- SCSS\n- Node.js\n- UI/UX\n- Git\n",
            },
            joke: {
              description: "Tell a random joke.",
              usage: "joke",
              fn: () =>
                "\nWhy do programmers prefer dark mode?\nBecause light attracts bugs!",
            },
            quote: {
              description: "Show a motivational quote.",
              usage: "quote",
              fn: () =>
                '\n\u2757 "Code is like humor. When you have to explain it, it’s bad." - Cory House',
            },
          }}
          welcomeMessage={
            "\n\u2728 Welcome to MYOS Cli!\nType 'help' to see all available commands.\n\uD83D\uDCBB Portfolio CLI | \uD83D\uDC64 Chetan\n"
          }
          promptLabel={"chetan@MYOS:~$"}
          promptLabelStyle={{
            color: "#00ff00",
            fontWeight: "bold",
            fontSize: "1.1em",
          }}
        />
      </div>
    </Window>
  );
};

export default Terminal;

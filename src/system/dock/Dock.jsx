import "./dock.scss";
import { useState } from "react";

const dockItems = [
  {
    id: "calendar",
    icon: "/doc-icons/calender.svg",
    action: () => window.open("https://calendar.google.com/", "_blank"),
    label: "Calendar",
  },
  {
    id: "terminal",
    icon: "/doc-icons/cli.svg",
    label: "Terminal",
  },
  {
    id: "mail",
    icon: "/doc-icons/mail.svg",
    action: () => window.open("mailto:chetan.mm25@gmail.com", "_blank"),
    label: "Mail",
  },
  {
    id: "notes",
    icon: "/doc-icons/notes.svg",
    label: "Notes",
  },
  {
    id: "spotify",
    icon: "/doc-icons/spotify.svg",
    label: "Music",
  },
  {
    id: "resume",
    icon: "/doc-icons/pdf.svg",
    label: "Resume",
  },
  {
    id: "github",
    icon: "/doc-icons/github.svg",
    label: "Projects",
  },
  {
    id: "linkedin",
    icon: "/doc-icons/linkedin.svg",
    action: () =>
      window.open("https://www.linkedin.com/in/chetan-m25/", "_blank"),
    label: "LinkedIn",
  },
];

const Dock = ({ setWindowsState, windowsState }) => {
  const [hovered, setHovered] = useState(null);

  const openApp = (id, action) => {
    if (action) return action();

    setWindowsState((state) => ({
      ...state,
      [id]: true,
    }));
  };

  return (
    <div className="dock">
      {dockItems.map((item, i) => {
        const distance = hovered === null ? 99 : Math.abs(i - hovered);

        const scale =
          distance === 0 ? 1.4 : distance === 1 ? 1.2 : distance === 2 ? 1 : 1;

        return (
          <div
            key={item.id}
            className={`icon ${windowsState[item.id] ? "active" : ""}`}
            style={{ transform: `scale(${scale})` }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => openApp(item.id, item.action)}
          >
            <img src={item.icon} alt={item.label} />

            <span className="tooltip">{item.label}</span>

            {windowsState[item.id] && <div className="indicator" />}
          </div>
        );
      })}
    </div>
  );
};

export default Dock;

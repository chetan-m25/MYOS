import "./dock.scss";

const Dock = ({ setWindowsState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {
          window.open("https://calendar.google.com/", "_blank");
        }}
        className="icon calender"
      >
        <img src="/doc-icons/calender.svg" alt="" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, terminal: true }));
        }}
        className="icon cli"
      >
        <img src="/doc-icons/cli.svg" alt="" />
      </div>

      <div className="icon link">
        <img src="/doc-icons/link.svg" alt="" />
      </div>

      <div
        onClick={() => {
          window.open("mailto:chetan.mm25@gmail.com", "_blank");
        }}
        className="icon mail"
      >
        <img src="/doc-icons/mail.svg" alt="" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, notes: true }));
        }}
        className="icon notes"
      >
        <img src="/doc-icons/notes.svg" alt="" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, spotify: true }));
        }}
        className="icon spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, resume: true }));
        }}
        className="icon pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, github: true }));
        }}
        className="icon github"
      >
        <img src="/doc-icons/github.svg" alt="" />
      </div>

      <div
        onClick={() => {
          window.open("https://www.linkedin.com/in/chetan-m25/", "_blank");
        }}
        className="icon linkedin"
      >
        <img src="/doc-icons/linkedin.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;

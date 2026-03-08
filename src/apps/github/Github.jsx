import githubData from "../../assets/github.json";
import Window from "../../components/window/Window";
import "./github.scss";

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>

      <div className="tags">
        {data.tags.map((tag, index) => (
          <p key={index} className="tag">
            {tag}
          </p>
        ))}
      </div>

      <div className="urls">
        <a href={data.repoLink}>Repository</a>
        {data.demoLink && <a href={data.demoLink}>Demo Link</a>}
      </div>
    </div>
  );
};

const Github = ({ windowName, setWindowsState }) => {
  return (
    <Window windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cards">
        {githubData.map((project) => (
          <GitCard key={project.id} data={project} />
        ))}
      </div>
    </Window>
  );
};

export default Github;

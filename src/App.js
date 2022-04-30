import "./App.css";
import Button from "./components/Button";

const buttons = [
  [
    {
      title: "<Button />",
      component: <Button />,
    },
    {
      title: "&:hover, &:focus",
      component: <Button state="hover" />,
    },
  ],
];

function App() {
  return (
    <div className="container">
      <h1>Buttons</h1>
      {buttons.map(button => (
        <div className="button-type-container">
          {button.map(({ title, component }) => (
            <div className="button-type">
              <pre>{title}</pre>
              {component}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;

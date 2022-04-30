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
  [
    {
      title: '<Button variant="outline" />',
      component: <Button variant="outline" />,
    },
    {
      title: "&:hover, &:focus",
      component: <Button variant="outline" state="hover" />,
    },
  ],
  [
    {
      title: '<Button variant="text" />',
      component: <Button variant="text" />,
    },
    {
      title: "&:hover, &:focus",
      component: <Button variant="text" state="hover" />,
    },
  ],
  [
    {
      title: "<Button disableShadow />",
      component: <Button disableShadow />,
    },
  ],
  [
    {
      title: "<Button disabled />",
      component: <Button disabled />,
    },
    {
      title: '<Button variant="text" disabled />',
      component: <Button variant="text" disabled />,
    },
  ],
  [
    {
      title: '<Button size="sm" />',
      component: <Button size="sm" />,
    },
    {
      title: '<Button size="md" />',
      component: <Button size="md" />,
    },
    {
      title: '<Button size="lg" />',
      component: <Button size="lg" />,
    },
  ],
  [
    {
      title: '<Button color="default" />',
      component: <Button color="default" />,
    },
    {
      title: '<Button color="primary" />',
      component: <Button color="primary">Primary</Button>,
    },
    {
      title: '<Button color="secondary" />',
      component: <Button color="secondary">Secondary</Button>,
    },
    {
      title: '<Button color="danger" />',
      component: <Button color="danger">Danger</Button>,
    },
  ],
  [
    {
      title: "&:hover, &:focus",
      component: <Button color="default" state="hover" />,
    },
    {
      title: "&:hover, &:focus",
      component: (
        <Button color="primary" state="hover">
          Primary
        </Button>
      ),
    },
    {
      title: "&:hover, &:focus",
      component: (
        <Button color="secondary" state="hover">
          Secondary
        </Button>
      ),
    },
    {
      title: "&:hover, &:focus",
      component: (
        <Button color="danger" state="hover">
          Danger
        </Button>
      ),
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

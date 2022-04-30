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
      title: "<Button disabled />",
      component: <Button disabled />,
    },
    {
      title: '<Button variant="text" disabled />',
      component: <Button variant="text" disabled />,
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

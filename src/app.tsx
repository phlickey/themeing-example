import logo from "./logo.svg";
import "./app.scss";

import { Theme1, Theme2, Theme3 } from "./themes";

import { Card, Button, Background } from "./components";

const MyApp = () => (
  <Background>
    <Card>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde corporis
      itaque expedita, exercitationem maiores quo reiciendis? Dolorem, amet.
      Laudantium ducimus minus, optio labore quibusdam quia nulla dicta cum
      adipisci omnis?
      <Button>Click here</Button>
    </Card>
    <Card>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde corporis
      itaque expedita, exercitationem maiores quo reiciendis? Dolorem, amet.
      Laudantium ducimus minus, optio labore quibusdam quia nulla dicta cum
      adipisci omnis?
      <Button>Click here</Button>
    </Card>
    <Card>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde corporis
      itaque expedita, exercitationem maiores quo reiciendis? Dolorem, amet.
      Laudantium ducimus minus, optio labore quibusdam quia nulla dicta cum
      adipisci omnis?
      <Button>Click here</Button>
    </Card>
  </Background>
);

function App() {
  return (
    <div className="App">
      <Theme1>
        Theme 1
        <MyApp />
      </Theme1>
      <Theme2>
        Theme 2
        <MyApp />
      </Theme2>
      <Theme3>
        Theme 3
        <MyApp />
      </Theme3>
    </div>
  );
}

export default App;

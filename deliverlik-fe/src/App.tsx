import axios from "axios";
import Layout from "./components/layout/Layout";
import { Button } from "./styles/Buttons.style";

function App() {
  // useEffect(() => {
  //   axios.get("/api/v1/hi", {}).then((res) => console.log(res));
  // }, []);

  return (
    <Layout>
      <Button>Hello world</Button>
    </Layout>
  );
}

export default App;

import { useSearchParams } from "react-router-dom";
const Home = () => {
  const [params, _setParams] = useSearchParams();
  console.log(params.get("value"));

  return <div>Home</div>;
};

export default Home;

import Gallery from "../components/Gallery";

const Home = ({isLoad}) => {
  return (
    <div className="App">
      <h1>Natural Pic</h1>
      {isLoad ? <Gallery /> : "espere un momento por favor..."}
    </div>
  );
};
export default Home;

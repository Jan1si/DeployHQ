import Header from "./components/Header/Header";
import Post from "./components/Posts/Post";

function App() {
  return (
    <div className="App">
     <Header />
     <div className="content">
      <Post />
     </div>
    </div>
  );
}

export default App;

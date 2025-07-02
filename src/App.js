import './App.css';
import Profile from "./components/Profile"
import Content from "./components/Content"
import ScrollToTopButton from "./components/ScrollToTopButton"
function App() {
  return (
    <div className="App w-full relative bg-background py-10 px-2">
    <div className="container mx-auto sm:px-4 px-0">
      <div className='grid lg:grid-cols-12 gap-4'>
          <Profile/>
          <Content/>
          <ScrollToTopButton/>
      </div>
    </div>
    </div>
  );
}

export default App;

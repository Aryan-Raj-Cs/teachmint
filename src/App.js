import logo from './logo.svg';
import './App.css';
import Directory from './component/directory';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import UserProfile from "./component/directory/UserProfiles"
function App() {
  return (
    <div className="App">
      {/* <Directory/> */}
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Directory/>}></Route>  
      <Route exact path='/profile/:id' element={<UserProfile/>}></Route>  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

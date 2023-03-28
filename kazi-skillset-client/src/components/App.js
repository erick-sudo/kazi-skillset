import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Recents from "./Recents";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Tasks from "./Tasks";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<><Landing /><Recents /></>} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/livechat" element={<></>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;

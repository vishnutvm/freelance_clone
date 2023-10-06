
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/index.jsx';
import UserProfile from './Pages/UserProfile.jsx/index.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;


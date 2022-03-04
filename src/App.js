import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
 import Login from './components/login/Login';
 import Studentregistration from './components/registration/studentregistration/Studentregistration';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-register" element={<Studentregistration />} /> 
          {/* <Route path="/article-list" element={<ArticleList />} /> */}
          {/* <Route path="/article/:name" element={<Article />} /> */}
          {/* <Route path="/signup" element={<Signup/>} /> */}
          <Route path="/student/login" element={<Login />} />
          
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


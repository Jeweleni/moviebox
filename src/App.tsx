import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './routes/home';
import Movie from './routes/movie';
import SignIn from './routes/signin';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import FileComparison from './pages/FileComparison/FileComparison';
import TextCompare from './pages/TextCompare/TextCompare';
import JsonFormatter from './pages/JsonFormatter/JsonFormatter';
import BlogList from './pages/Blog/BlogList';
import BlogPost from './pages/Blog/BlogPost';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename='/tools'>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/file-comparison" element={<FileComparison />} />
            <Route path="/text-compare" element={<TextCompare />} />
            <Route path="/json-formatter" element={<JsonFormatter />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

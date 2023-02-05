import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateProduct.js';
import ShowBookList from './components/ShowProducts.js';
import ShowBookDetails from './components/ShowProductDetails.js';
import UpdateBookInfo from './components/UpdateProductinfo.js';
import FilesUploadComponent from './components/UploadPhoto.js';
import BlogForm from './components/Blog.js'; 
import BlogList from './components/ShowBlog.js';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowBookList />} />
          <Route exact path='/photo-upload' element={<FilesUploadComponent />} />
          <Route path='/create-book' element={<CreateBook />} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
          <Route path='/show-book/:id' element={<ShowBookDetails />} />
          <Route path='/create-blog' element={<BlogForm />} />
          <Route path='/discussion-forum' element={<BlogList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
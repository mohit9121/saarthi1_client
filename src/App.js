import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './components/Homepage/Homepage.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import BlogList from './components/Discussion/Discussion.js';
import ShowItems from './components/ShowItems/ShowItems.js';
import ShowItemDetails from './components/ShowItemDetails/ShowItemDetails.js';
import ShowBlog from './components/ShowBlog/ShowBlog.js';
import CreateBook from './components/CreateProduct.js';
import ShowBookDetails from './components/ShowProductDetails.js';
import UpdateBookInfo from './components/UpdateProductinfo.js';
import FilesUploadComponent from './components/UploadPhoto.js';
import BlogForm from './components/Blog.js'; 
import Register from './components/User.js';
import Login from './components/Login/Login.js'; 
import AddItem from './components/AddItems/AddItem.js';
import EditItemDetails from './components/EditItemDetails/EditItemDetails.js';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/photo-upload' element={<FilesUploadComponent />} />
          <Route path='/create-book' element={<CreateBook />} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
          <Route path='/show-book/:id' element={<ShowBookDetails />} />
          <Route path='/create-blog' element={<BlogForm />} />
          <Route path='/discussion-forum' element={<BlogList />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
 

          <Route path='/test' element={<HomePage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/add-item' element={<AddItem/>} />
          <Route path='/show-items' element={<ShowItems/>} /> 
          <Route path='/show-item/:productId' element={<ShowItemDetails/>} /> 
          <Route path='/edit-item/:id' element={<EditItemDetails/>} /> 
          <Route path='/show-blog/:blogId' element={<ShowBlog/>} /> 
        </Routes>
      </div> 
    </Router>
  );
}; 

export default App;

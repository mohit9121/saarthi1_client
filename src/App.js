import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateProduct';
import ShowBookList from './components/ShowProducts';
import ShowBookDetails from './components/ShowProductDetails';
import UpdateBookInfo from './components/UpdateProductinfo';
import FilesUploadComponent from './components/UploadPhoto';


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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
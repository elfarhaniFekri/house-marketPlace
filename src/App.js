import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import Category from './pages/Category'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import CreateListing from './pages/CreateListing'
import EditListing from './pages/EditListing'
import Listing from './pages/Listing'
import Contact from './pages/Contact'

function App() {
  return (
    <>
        <Router>
            <Routes>
              <Route path='/' element={<Explore />} />
              <Route path='/offers' element={<Offers />} />
              <Route path='/category' element={<Category />} />
              <Route path='/profile' element={<PrivateRoute />}>
                <Profile />
                </Route>
              <Route path='/signIn' element={<SignIn />} />
              <Route path='/signUp' element={<SignUp />} />
              <Route path='/forgotPassword' element={<ForgotPassword />} />
              <Route path='/createListing' element={<CreateListing />} />
              <Route path='/editListing' element={<EditListing />} />
              <Route path='/listing' element={<Listing />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            <Navbar />
        </Router>

      <ToastContainer />
    </>
  )
}

export default App

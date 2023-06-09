import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContex';
import { RepertoireProvider } from './contexts/PieceContext';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { AboutUs } from './components/About/About-us/About-us';
import { Conductor } from './components/About/Conductor/Conductor';
import { Concerts } from './components/Concerts/Concerts';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';
import { NotFound } from './components/NotFound/NotFound';
import { ScroolToTop } from './components/ScroolToTop/ScroolToTop';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { Profile } from './components/Profile/Profile';
import { LoginGuard } from './components/common/LoginGuard/LoginGuard';
import { LogoutGuard } from './components/common/LogoutGuard/LogoutGuard';
import { ToastContainer } from './components/Toast/ToastContainer';
import { Repertoire } from './components/Repertoire/Repertoire';
import { PieceDetails } from './components/Portfolio/PieceDetails/PieceDetails';

import './App.css';
import { CommentsProvider } from './contexts/CommentsContext';


function App() {
  const scroolToTop = () => {
    window.scrollTo(0, 0);
  }


  return (
    <ToastProvider>
      <AuthProvider>
        <RepertoireProvider>
          <CommentsProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about-us" element={<AboutUs />}></Route>
              <Route path="/conductor" element={<Conductor />}></Route>
              <Route path="/concerts" element={<Concerts />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path='/portfolio/:pieceId' element={<PieceDetails />} />
              <Route path="/contact" element={<Contact />}></Route>

              {/* TODO add guards  */}
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/repertoire" element={<Repertoire />}></Route>

              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>

              <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />

            <ToastContainer />
            <ScroolToTop scroolToTop={scroolToTop} />
          </CommentsProvider>
        </RepertoireProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;


// <Route path="/logout" element={
//     <LoginGuard>
//       <Logout />
//     </LoginGuard>}>
//   </Route>

//   <Route path="/profile" element={
//     <LoginGuard>
//       <Profile />
//     </LoginGuard>}>
//   </Route>

//   <Route path="/repertoire" element={
//     <LoginGuard>
//       <Repertoire />
//     </LoginGuard>}>
//   </Route>

//   <Route path="/login" element={
//     <LogoutGuard>
//       <Login />
//     </LogoutGuard>}>
//   </Route>

//   <Route path="/register" element={
//     <LogoutGuard>
//       <Register />
//     </LogoutGuard>}>
//   </Route>
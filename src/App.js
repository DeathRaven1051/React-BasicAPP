import './App.css';
import Login from './component/login'
import EmailVerification from './component/email_verification'
import {BrowserRouter , Routes , Route , Link} from 'react-router-dom'

function App() {
    return (
     
        <>


        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<EmailVerification/>}/> 
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>

        </>
    );
}

export default App;
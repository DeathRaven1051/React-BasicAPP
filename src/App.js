import './App.css';

import Netflix from './images/netflix.png';
import Prime from './images/amazon.png';
import Hotstar from './images/DisneyHotstar.png';
import SonyLiv from './images/sonyliv.jpg';
import Zee from './images/zee5.png';
import Voot from './images/voot.png';
import SunNxt from './images/sunNxt.png';
import Aha from './images/aha.png';
import Funimation from './images/funimation.png';
import TOI from './images/toi.png';
import Byjus from './images/byjus.png';
import Crunchyroll from './images/crunchyroll.png';



function App() {

    const icon = [Netflix,Prime,Hotstar,SonyLiv,Zee,Voot,SunNxt,Aha,Funimation,TOI,Byjus,Crunchyroll]

    return ( 
    <div className = "App" >
        <div className= "NAV">
            <nav>
            <span>
            <p className= 'brand'>Subspace.</p>
            </span>
            <span style={{marginLeft: "360px"}}>New to SubSpace? <button>Sign Up</button></span>
            </nav>
            </div>
            
          <div className= 'container'>
              <div className='wrap1'>
                <div className='content1'>
                <h3 style={{textAlign: "center", marginBottom: "15px"}}>Log in to Dashboard</h3>
                <form>
                    <label><sup>Your Email</sup>
                    <div></div>
                        <input type='email' name='email' className='email'></input>
                    </label>

                    <div style={{margin: "35px"}}></div>

                    <label><sup>Password</sup>
                    <div></div>
                        <input type='password' name='password' className='password'></input>
                    </label>
                    <h6 style={{color: "#2b83ea" , marginTop: "5px"}}>Forgot Password?</h6>

                    <input type="submit" value='LogIn' className="submit"/>

                </form>
                
                </div>
              </div>

              <div className='wrap2'>
                  <div className='content2'>
                  <h3 style={{marginLeft: "73px"}}>Why choose SubSpace?</h3>
                  <h6 style={{marginLeft: "50px" ,marginTop: "10px"}}>2000+ business trust their payments with SubSpace</h6>
                  <div className='images'>

                    {
                        icon.map(Image => <img src={Image} alt='Images' height='50px' width='50px'/>)
                    }
                  
                    <h6 style= {{marginTop: "70px", marginLeft: "20px"}}>Need help? We are just a click away. <u>Contact Us</u></h6>
                  </div>
                  </div>
              </div>
          </div>

        </div>
    );
}

export default App;
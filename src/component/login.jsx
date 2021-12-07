import '../App.css';

import Icon from './icon';
import {Link} from 'react-router-dom';



function index() {


    return ( 
        <div className = "App" >
        <div className= "NAV">
            <nav>
            <span>
            <p className= 'brand'>Subspace.</p>
            </span>
            <span style={{marginLeft: "360px"}}>New to SubSpace? 
            <Link to= "/"><button>Sign Up</button></Link>
            </span>
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

            <Icon/>

          </div>

        </div>
    );
}

export default index;
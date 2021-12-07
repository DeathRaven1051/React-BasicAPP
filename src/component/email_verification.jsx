import '../App.css';
import Icon from './icon';
import {Link} from 'react-router-dom';


function EmailVerification(){

    return(
        <div className = "App" >
        <div className= "NAV">
            <nav>
            <span>
            <p className= 'brand'>Subspace.</p>
            </span>
            <span style={{marginLeft: "380px"}}>Already a User? 
            <Link to= "/login"><button style={{marginLeft: "10px"}}>Log In</button></Link>
            </span>
            </nav>
            </div>
            
          <div className= 'container'>
              <div className='wrap1'>
                <div className='content1'>
                <h3 style={{marginBottom: "20px" , marginTop: "20px"}}>Verify your Email</h3>
                <h6>A verification code wil be sent to your email.</h6>

                <form>
                    <label style={{marginLeft: "-20px"}}><sup>Verification Code</sup>
                    <div></div>
                        <input  style={{marginLeft: "-20px"}} type='text' name='verify' className='verify' placeholder='6 digit Verification Code'></input>
                    </label>

                    <div style={{margin: "35px"}}></div>

                    
                   <h6 className="codeErr">Didn't Receive the code?<span style={{color: "#2b83ea"}}>Resend</span></h6>

                    <input style={{marginLeft: "40px" , marginTop: "40px"}} type="submit" value='Verify Email' className="submit"/>

                </form>
                
                </div>
              </div>

            <Icon/>

          </div>

        </div>
    )

}

export default EmailVerification;
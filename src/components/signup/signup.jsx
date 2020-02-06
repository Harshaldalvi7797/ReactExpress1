import React,{Component} from "react";
import "./signup.css";

class Signup extends Component{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="container">
                <h1>Register here</h1>
         


	  <div className="row">
        <div className="col-md-6 col-md-offset-3">
            <form  method="post"  className="form" >  
             <legend>Sign Up</legend>
                    <h4>It's free and always will be.</h4>
                    <div class="row">
                        <div class="col-xs-6 col-md-6">
                            <input type="text" name="firstname" value="" className="form-control input-lg" placeholder="First Name"  />                       
                            </div>
                        <div class="col-xs-6 col-md-6">
                            <input type="text" name="lastname" value="" className="form-control input-lg" placeholder="Last Name"  />                       
                            </div>
                    </div>
                    <input type="text" name="email" value="" className="form-control input-lg" placeholder="Your Email"  />
                    <input type="password" name="password" value="" className="form-control input-lg" placeholder="Password"  />
                    <input type="password" name="confirm_password" value="" className="form-control input-lg" placeholder="Confirm Password"  />
                    <button className="btn btn-lg btn-primary btn-block signup-btn" type="submit">
                        Create my account</button>
            </form>

    </div>
</div>
</div>

        );

    }
}

export default Signup;
import React,{Component} from "react";
import "./signup.css";
import{connect} from "react-redux";
import {Userregister} from "../../redux/action/user/user";
import SimpleReactValidator from 'simple-react-validator';
class Signup extends Component{
    constructor()
    {
    
        super();
        this.state={
            FirstName:"",
            LastName:"",
            EmailId:"",
            password:""
        };

    }
     Inputdata=e=>
    {
        console.log(e);
    }
        handlerformSubmit=e=>
        {
            e.preventDefault();

        }
    
    render()
    {
        return(
            <div className="container">
                <h1>Register here</h1>
         


	  <div className="row">
        <div className="col-md-6 col-md-offset-3">
            <form  method="post"  className="form" onSubmit={this.handlerformSubmit} >  
             <legend>Sign Up</legend>
                    <h4>It's free and always will be.</h4>
                    <div className="row">
                        <div className="col-xs-6 col-md-6">
                            <input type="text" name="FirstName" value={this.state.FirstName} 
                            className="form-control input-lg" placeholder="First Name" 
                            onChange={this.Inputdata} />                       
                            </div>
                        <div className="col-xs-6 col-md-6">
                            <input type="text" name="Lastname" value={this.state.LastName}
                             className="form-control input-lg" placeholder="Last Name"
                             onChange={this.Inputdata}  />                       
                            </div>
                    </div>
                    <input type="text" name="Email" value={this.state.EmailId} 
                    className="form-control input-lg" placeholder="Your Email"
                    onChange={this.Inputdata}  />
                    <input type="password" name="password" value={this.state.password}
                     className="form-control input-lg" placeholder="Password" 
                     onChange={this.Inputdata} />
                    {/* <input type="password" name="confirm_password" value="" className="form-control input-lg" placeholder="Confirm Password"  /> */}
                    <button className="btn btn-lg btn-primary btn-block signup-btn" type="submit">
                        Create my account</button>
            </form>

    </div>
</div>
</div>

        );

    }
}

const mapStateToProps = state =>
{
    console.log(state);
    return state;

}

export default connect(mapStateToProps,{Userregister}) (Signup);
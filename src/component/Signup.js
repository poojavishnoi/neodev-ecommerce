import "./signup.css";
import {Link} from "react-router-dom";

function Signup() {
  return (
    <div className="signup_container">
      <h1>SignUp</h1>
      <div className="form_main_container">
       
          <label className="form_label">Email:</label>
          <input
            type="email"
            className="form_input"
            placeholder="name@example.com"
            
          />
          <label className="form_label form-label-required-field">
            Enter Password:
          </label>
          <input
            type="email"
            className="form_input"
            placeholder="Enter Password"
          />
        {/* <div className="inline_form_input"> */}
        <label className="form-label-required-field form_label"><input className="checkbox_input" type="checkbox"></input>
    Yes, I accept the terms</label>
        {/* </div> */}
        <button className="btn primary_solid_btn" type="submit">Create New Account</button>
        <Link to='/login'><button className="btn secondary_solid_btn">Already have an account</button></Link>

      </div>

    </div>


  );
}

export default Signup;

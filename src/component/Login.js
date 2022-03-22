import "./signup.css";

function Login(){
  return (
    <div className="signup_container">
      <h1>Login</h1>
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

        <a href="/">
          Forgot the password?
        </a>
        <div className="inline_form_input">
        
        <label className="form-label-required-field form_label"><input className="checkbox_input" type="checkbox"></input>Remember me</label>
        
        </div>
       
        <button className="btn  primary_solid_btn" type="submit">Login</button>
        <button className="btn secondary_solid_btn" type="submit">Create New Account</button>

      </div>
    </div>
  );
} 

export default Login
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
		
		const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ values })
        };
        fetch('localhost:8000/api/login', requestOptions)
            .then(response => response.json())
            .then(data => {})
			.catch(rejected => {
				alert('Cannot login because it is out of scope and localhost:8000/api/login isnt an actual server. Sorry :)');
			});
		
		
		
        setSubmitting(false);
      }, 500);
    }}
    
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Please enter an email ID."),
      password: Yup.string()
        .required("Please enter password!")
        .min(8, "Password must be at least 8 characters!")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
	<div class="container">	
		<div class="loginPage">
		<label class="Green"></label>
		<label class="LightGreen"></label>
		<span class="signinLab">Sign in</span>
		
        <form onSubmit={handleSubmit}>
		
		<div class="loginEmail">
		 <div class="emailField">
          <label class="EmailID" htmlFor="email">Email</label>
		  </div>
		  <div class="emailInput">
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
		  </div>
			{errors.email && touched.email && (
				<div className="input-feedback">{errors.email}</div>
			)}		  
		  </div>
		  
          
		  
		  <div class="loginPass">
		   <div class="passwordField">
          <label class="Password" htmlFor="email">Password</label>
		  </div>
		  <div class="passInput">
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
		  </div>
		   {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
		  </div>
         
		  
		  <div class="rememMe"><input type="checkbox" id="checkMe"/><label for="checkMe">Remember me?</label></div>
          <button type="submit" class="submitIt" disabled={isSubmitting}>
            Login
          </button>
        </form>
		
		<div class="bottom-section">
		<div class="redirectFP">
			<a class="forgetPass" href="">Forgot your password?</a>
		</div>
		<div class="signUp">
			<span>Don't have an account? </span><a class="signupLink" href="">Sign up</a>
		</div>
		<div class="ResEmailConf">
			<a class="resendEmailC" href="">Resend email confirmation</a>
		</div>
	</div>
		
		</div>
	</div>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;

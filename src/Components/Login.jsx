import React from 'react'

function Login() {
  return (
    <>
      <div className='d-flex justify-content-center'>
        <div>
        
        <div className='mt-4 log_box p-3'>
            <h4 className='text-primary fw-bold mb-4'>Log In</h4>
            <form action="">
                <label htmlFor="" className='form-label fs-5 fw-medium '>EmailId OR MobileNO:</label>
                <input type="text" className='form-control w-75' placeholder='Enter EmailId Or MobileNo'/>

                <label htmlFor="" className='form-label fs-5 fw-medium mt-3'>Password:</label>
                <input type="password" className='form-control w-75' placeholder='Enter Password'/>

                <button className='btn btn-primary mt-3 w-100 fs-5 fw-medium'>LogIn</button>
            </form>
            <div className='d-flex justify-content-between'>
            <h6 className='mt-2'>Don't have an account?<a href="">SignUp</a></h6>
            <a href="" className='mt-2 fs-6'>Forgot Password?</a>
            </div>
            <p className='pt-3'>By continuing, you agree to <a href="">terms Of Use </a>and <a href="">Privacy Policy.</a></p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login

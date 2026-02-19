
import './Get.css'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setpassword1,reset,resetemailonly } from './dataslice';


function Getstart() {
    let navigate=useNavigate();
    let tem=useSelector((state)=>state.users.tem);
    let user=useSelector((state)=>state.users.users);
    let email=useSelector((state)=>state.users.email)
    let password1=useSelector((state)=>state.users.password1);
    let common=tem||email
    let dispatch=useDispatch();


  

   function goin(){
                let currect=user.find((data)=>{
                    return data.number===common
                     })
                    if(currect.password===password1){
                        
                        navigate("/home")
                        dispatch(reset())
                    }
                    
                    if (currect.password!=password1) {
                       dispatch(resetemailonly())
                    }      
                }            

    function nav(){
        navigate("/signin")
    }
    let navhome=()=>{
        navigate("/")
    }
  return (
    <>
    <div className='g-full'>
    <div className='container '>
    <div className='row '>
      <div className='col-12 get-nav py-3'>
        <h2 id="logo" className='logo' role='button' onClick={navhome}>NETFLIX</h2>
        <p className='get-signin' role='button' onClick={nav}>Signin</p>
      </div>
    </div>
    </div>
    <hr className=' m-0 '></hr>
    <div className='container py-5'>
    <div className="row get-form py-4">
    <div className="col-5 inner-form ">
    <p id='ff'>Step 1 of 3</p>
    <h2>Welcome back!</h2>
    <h2 id="line" >Joining Netflix is easy.</h2>
    <p>Enter your password and you'll be watching in no time.</p>
    <p>Email</p>
    <p>{common}
    </p>
    <input type="text" placeholder='Password' value={password1} onChange={e=>dispatch(setpassword1(e.target.value))} />
    <p><u>Forgot your Password?</u></p>
    <button onClick={()=>{goin()}}>Next</button>
    </div>
    </div>
    </div>
  <div className='container-fluid g-footerdiv'>
    <div className="row  pt-4 mlef">
      <div className='col'>
    <p>Questions? <u role='button'>Call 000-800-919-1743</u> </p>
    </div>
    </div>
    <div className="row g-footer mlef">
    <div className="col-3 ftec"><p role='button'>FAQ<br/>
            Cookie Preferences
            </p>
            </div>
            <div className="col-3 ftec"><p role='button'>Help Center<br/>
            Corporate Information
            </p>
            </div>
            <div className="col-3 ftec"><p role='button'>Terms of Use
            </p></div>
            <div className="col-3 ftec"><p role='button'>
            Privacy
            </p></div>
</div>
<div className="row pb-4 mlef">
  <div className="col-12">
    <Form.Select aria-label="Default select example" id="g-option">
      <option value="1">English</option>
      <option value="2">Hindi</option>
    </Form.Select>
  </div>
</div>
    </div>
    </div>
    
    </>
  )
}

export default Getstart;

"use client"
import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { useRouter } from 'next/navigation';

function Loginform() {

  const [userList, setUserList] = useState([]);
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [signInError, setSignInError] = useState("");
  const [emptyError, setEmptyError] = useState("")
  const [successFull, setSuccessfull] = useState("");
  const router = useRouter();

  const handleLogin = () => {

    // {Regular expression for email with regex}
    // let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // let emailvalidation = regex.test(signInData.email);

    useEffect(() => {
      const initialData = JSON.parse(localStorage.getItem("userData"));
      setUserList([...userList,initialData]);
    }, []);

    if (!signInData.email.trim() || !signInData.password.trim()) {
      setEmptyError("Please Fill The Email And Password");

      setTimeout(() => {
        setEmptyError("")
      }, 1000);
    }


    const user = userList.filter((item, index) =>( item.email == signInData.email) && (item.password == signInData.password));
    console.log(user);
    if (user.length > 1) {
      setSignInError("");
      setSuccessfull("sign in successfully")
      setSignInData({ email: "", password: "" });
      router.push("/");
      setTimeout(() => {
        setSuccessfull("");
      }, 2000);

    }
    else if (signInData.email.trim().length < 1 || signInData.password.trim().length < 1) {
      setSignInError("invalid data please try again")

      setTimeout(() => {
        setSignInError("")
        setSignInData({ email: "", password: "" });
      }, 1000);
    };

  }

  return (
    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>
              <p>{successFull}</p>
            <MDBCardBody>
              <p>{emptyError}</p>

              <MDBInput autoFocus value={signInData.email} onChange={(e) => setSignInData({ ...signInData, email: e.target.value })} wrapperClass='mb-4' label='Email address' id='form1' type='email' />
              <p>{signInError}</p>

              <MDBInput value={signInData.password} onChange={(e) => setSignInData({ ...signInData, password: e.target.value })} wrapperClass='mb-4' label='Password' id='form2' type='password' />
              <p>{signInError}</p>
              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100" onClick={handleLogin}>Sign in</MDBBtn>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}

export default Loginform;
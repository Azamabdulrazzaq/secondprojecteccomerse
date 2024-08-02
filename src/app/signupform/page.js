"use client"
import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { useRouter } from 'next/navigation';

function Signupform() {


    const [users, setUsers] = useState([]);
    const [signUpData, setSignUpData] = useState({ firstname: '', lastname: '', email: '', password: '' });
    const [emptyError, setEmptyError] = useState("")
    const [dataError, setDataError] = useState("")
    const [successfull, setSuccessfull] = useState("");
    const router = useRouter();
    // const [isCheck, setIsCheck] = useState(false);


    const handleSignUp = () => {


        if ((signUpData.firstname.trim() !== "") && (signUpData.lastname.trim() !== "") && (signUpData.email.trim() !== "") && (signUpData.password.trim() !== "")) {
            const newusers = {
                id: users.length + 1,
                firstname: signUpData.firstname,
                lastname: signUpData.lastname,
                email: signUpData.email,
                password: signUpData.password,
            }
            setUsers([...users, newusers]);
            localStorage.setItem("userData", JSON.stringify([...users, newusers]));
            setSignUpData({ firstname: '', lastname: '', email: '', password: '' });
            setSuccessfull("The signUp  Successfully");
            // router.push("/");
        }
        else if ((users.email == signUpData.email) && (users.firstname == signUpData.firstname) && (users.lastname == signUpData.lastname) && (users.password == signUpData.password)) {
            setDataError("Email is Already Exist");
            setSignUpData({ firstname: '', lastname: '', email: '', password: '' });
            setTimeout(() => {
                setDataError("");
            }, 2000);

        }

        else {
            setEmptyError("Something went wrong");
            setTimeout(() => {
                setEmptyError("");
            }, 2000);
        }

    }


    return (
        <MDBContainer fluid>

            <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>

            <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                <MDBCardBody className='p-5 text-center'>

                    <h2 className="fw-bold mb-5">Sign up now</h2>
                    <p style={{ color: "red", fontFamily: "initial", fontSize: "20px" }}>{emptyError}</p>
                    <p style={{ color: "red", fontFamily: "initial", fontSize: "20px" }}>{successfull}</p>
                    <MDBRow>
                        <MDBCol col='6'>
                            <MDBInput wrapperClass='mb-4' value={signUpData.firstname}
                                onChange={(e) => setSignUpData({ ...signUpData, firstname: e.target.value })}
                                label='First name' id='form1' type='text' />
                        </MDBCol>

                        <MDBCol col='6'>
                            <MDBInput wrapperClass='mb-4' value={signUpData.lastname}
                                onChange={(e) => setSignUpData({ ...signUpData, lastname: e.target.value })}
                                label='Last name' id='form1' type='text' />
                        </MDBCol>
                    </MDBRow>

                    <MDBInput wrapperClass='mb-4' value={signUpData.email}
                        onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                        label='Email' id='form1' type='email' />
                    <p>{dataError}</p>
                    <MDBInput wrapperClass='mb-4' value={signUpData.password}
                        onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                        label='Password' id='form1' type='password' />

                    <div className='d-flex justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' value="" id='flexCheckDefault' label='All Input Feild Are Correct' />
                    </div>

                    <MDBBtn className='w-100 mb-4' size='md' onClick={handleSignUp} >sign up</MDBBtn>

                    <div className="text-center">

                        <p>or sign up with:</p>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='facebook-f' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='twitter' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='google' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='github' size="sm" />
                        </MDBBtn>
                    </div>

                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
}

export default Signupform;
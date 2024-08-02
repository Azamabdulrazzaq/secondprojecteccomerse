// "use client"
// import { useEffect, useState } from 'react'
// import Link from 'next/link';
// import signupform from '@/app/signupform/page';
// import styles from "@/app/styles/Page-module.css"
// import { useRouter } from 'next/navigation';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBInput,
//   MDBCheckbox,
//   MDBModal,
//   MDBIcon,
//   MDBModalHeader,
//   MDBModalTitle,
// } from 'mdb-react-ui-kit';

// const Cartproduct = ({ productList }) => {
//   const [staticModal, setStaticModal] = useState(false);

//   const toggleOpen = () => setStaticModal(!staticModal);
//   const [allProducts, setAllProducts] = useState([])
//   const [userList, setUserList] = useState([]);
//   const [signInData, setSignInData] = useState({ email: "", password: "" });
//   const [signInError, setSignInError] = useState("");
//   const [emptyError, setEmptyError] = useState("")
//   const [successFull, setSuccessfull] = useState("");
//   const router = useRouter();


//   if (localStorage.getItem("Products") !== null) {
//     const fetchData = localStorage.getItem("Products");
//     const jsonData = JSON.parse(fetchData);
//     // console.log(jsonData);
//     setAllProducts(jsonData);
//   }

//   else {
//     localStorage.setItem("Products", JSON.stringify([]));
//   }

//   const handleLogin = () => {

//     useEffect(() => {
//       const storeUserData = localStorage.getItem("userData")

//       try {
//         const parseUserData = JSON.parse(storeUserData);

//         setUserList(parseUserData || []);
//       }

//       catch (error) {
//         console.log("parse data is not define", error)
//       }
//     });

//     if (!signInData.email.trim() || !signInData.password.trim()) {
//       setEmptyError("Please Fill The Email And Password");

//       setTimeout(() => {
//         setEmptyError("")
//       }, 1000);
//     }


//     const user = userList.filter((item, index) => (item.email == signInData.email) && (item.password == signInData.password));
//     console.log(user);
//     if (user.length > 1) {
//       setSignInError("");
//       setSuccessfull("sign in successfully");
//       setSignInData({ email: "", password: "" });
//       router.push("/");
//       setTimeout(() => {
//         setSuccessfull("");
//       }, 2000);

//     }
//     else if (signInData.email.trim().length < 1 || signInData.password.trim().length < 1) {
//       setSignInError("invalid data please try again")

//       setTimeout(() => {
//         setSignInError("")
//         setSignInData({ email: "", password: "" });
//       }, 1000);
//     };

//   }

//   return (
//     <>
//       <div className='container'>
//         <div className='row'>
//           {
//             (allProducts && allProducts.length > 0)
//               ?
//               (
//                 allProducts.map((item, index) => {
//                   return (
//                     <div className="col-4" key={index}>
//                       <div className="card Box-size">
//                         <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
//                           <img src={item.image} className="img-fluid images" />
//                           <a href="#!">
//                             <div className="mask" style={{ background: "rgba(251, 251, 251, 0.15)" }}></div>
//                           </a>
//                         </div>
//                         <div className="card-body">
//                           <h5 class="card-title">{item.Name}</h5>
//                           <p class="card-text">{item.Discription} </p>
//                           <h5 class="card-title">{item.Price}</h5>
//                           <div>
//                             <MDBBtn onClick={toggleOpen}>Add To Cart</MDBBtn>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 })
//               )
//               :
//               (null)
//           }
//         </div>
//       </div>
//       <MDBModal staticBackdrop tabIndex='-1' open={staticModal} setOpen={setStaticModal}>
//         <MDBContainer className='my-5 bg-white'>
//           <MDBModalHeader>
//             <MDBModalTitle>Sign In Form</MDBModalTitle>
//             <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
//           </MDBModalHeader>
//           <MDBCard>

//             <MDBRow className='g-0 d-flex align-items-center'>

//               <MDBCol md='4'>
//                 <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
//               </MDBCol>

//               <MDBCol md='8'>
//                 <p>{successFull}</p>
//                 <MDBCardBody>
//                   <p>{emptyError}</p>
//                   <MDBInput autoFocus value={signInData.email} onChange={(e) => setSignInData({ ...signInData, email: e.target.value })} wrapperClass='mb-4' label='Email address' id='form1' type='email' />
//                   <p>{signInError}</p>
//                   <MDBInput value={signInData.password} onChange={(e) => setSignInData({ ...signInData, password: e.target.value })} wrapperClass='mb-4' label='Password' id='form2' type='password' />
//                   <p>{signInError}</p>
//                   <div className="d-flex justify-content-between mx-4 mb-2">
//                     <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
//                     <a href="!#">Forgot password?</a>
//                   </div>

//                   <MDBBtn className="mb-4 w-100" onClick={handleLogin}>Sign in</MDBBtn>

//                   <div className="text-center">
//                     <p>Not a member? <Link href={"/signupform"}> Register </Link> </p>
//                     <p>or sign up with:</p>

//                     <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
//                       <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                         <MDBIcon fab icon='facebook-f' size="sm" />
//                       </MDBBtn>

//                       <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                         <MDBIcon fab icon='twitter' size="sm" />
//                       </MDBBtn>

//                       <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                         <MDBIcon fab icon='google' size="sm" />
//                       </MDBBtn>

//                       <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                         <MDBIcon fab icon='github' size="sm" />
//                       </MDBBtn>

//                     </div>
//                   </div>
//                 </MDBCardBody>

//               </MDBCol>

//             </MDBRow>

//           </MDBCard>
//         </MDBContainer>
//       </MDBModal>
//     </>
//   )
// }

// export default Cartproduct;







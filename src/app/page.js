
"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link';
import signupform from '@/app/signupform/page';
import styles from "@/app/styles/Page-module.css"
import { useRouter } from 'next/navigation';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBModal,
  MDBIcon,
  MDBModalHeader,
  MDBModalTitle,
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,

} from 'mdb-react-ui-kit';

const Cartproduct = () => {
  const [staticModal, setStaticModal] = useState(false);

  const toggleOpen = () => setStaticModal(!staticModal);
  const [allProducts, setAllProducts] = useState([])
  const [userList, setUserList] = useState([]);
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [signInError, setSignInError] = useState("");
  const [emptyError, setEmptyError] = useState("")
  const [successFull, setSuccessfull] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("products") !== null) {
      const fetchData = localStorage.getItem("products");
      const jsonData = JSON.parse(fetchData);
      setAllProducts(jsonData);
      // console.log(jsonData);
    }

    else {
      localStorage.setItem("products", JSON.stringify([]));
    }
  }, []);


  function handleLogin() {

    if (!signInData.email.trim() || !signInData.password.trim()) {
      setEmptyError("Please Fill The Email And Password");

      setTimeout(() => {
        setEmptyError("");
      }, 1000);
    }


    const user = userList.filter((item, index) => (item.email == signInData.email) && (item.password == signInData.password));
    console.log(user);
    if (user.length > 1) {
      setSignInError("");
      setSuccessfull("sign in successfully");
      setSignInData({ email: "", password: "" });
      router.push("/");
      setTimeout(() => {
        setSuccessfull("");
      }, 2000);

    }
    else if (signInData.email.trim().length < 1 || signInData.password.trim().length < 1) {
      setSignInError("invalid data please try again");

      setTimeout(() => {
        setSignInError("");
        setSignInData({ email: "", password: "" });
      }, 1000);
    };

  }

  return (
    <>
      <div>
        <div className='list'>
          <ul className='ul-list'>
            <Link href={"/"}>Groceries & Pets</Link>
            <br />
            <Link href={"/"}>Health & Beauty</Link>
            <br />
            <Link href={"/"}>Men's Fashion</Link>
            <br />
            <Link href={"/"}>Women's Fashion</Link>
            <br />
            <Link href={"/"}>Mother & Baby</Link>
            <br />
            <Link href={"/"}>Home & LIfestyle</Link>
            <br />
            <Link href={"/"}>Electronic Devices</Link>
            <br />
            <Link href={"/"}>Electronic Accessories</Link>
            <br />
            <Link href={"/"}>TV & Home Appliances</Link>
            <br />
            <Link href={"/"}>Watches, Bags & Jewellery</Link>
          </ul>
        </div>
      </div>
      <div className='Container'>
        <MDBCarousel>
          <MDBCarouselItem itemId={1}>
            <img src='https://shorturl.at/bdfiE' className='d-block w-100 inner-section' alt='image1' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img src='https://shorturl.at/nFW56' className='d-block w-100  inner-section size' alt='image2' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src='https://shorturl.at/gLT26' className='d-block w-100 inner-section size' alt='image3' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={4}>
            <img src='https://shorturl.at/FINVZ' className='d-block w-100 inner-section size' alt='image3' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={5}>
            <img src='https://ecommercephotographyindia.com/blog/wp-content/uploads/2022/07/beauty-products-1.jpg' className='d-block w-100 inner-section size' alt='image3' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={6}>
            <img src='https://rb.gy/08kaz0' className='d-block w-100 inner-section size' alt='image3' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={7}>
            <img src='https://rb.gy/qjaqpt' className='d-block w-100 inner-section size' alt='image3' />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={8}>
            <img src='https://rb.gy/z6eiiw' className='d-block w-100 inner-section size' alt='image3' />
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <div className='container container-fluid'>
        <div className='row mt-20'>
          {
            (allProducts && allProducts.length > 0)
              ?
              (
                allProducts.map((item, index) => {
                  return (
                    <div className="col-4" key={index}>
                      <div className="card Box-size">
                        <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                          <MDBCardImage
                            src={item.image}
                            width={"100px"}
                            height={"250px"}
                            position='top'
                            alt='image'
                          />
                          <a href="#!">
                            <div className="mask" style={{ background: "rgba(251, 251, 251, 0.15)" }}></div>
                          </a>
                        </div>
                        <div className="card-body">
                          <h5 class="card-title">{item.Name}</h5>
                          <p class="card-text">{item.Discription} </p>
                          <h5 class="card-title">{item.Price}</h5>
                          <div>
                            <MDBBtn onClick={toggleOpen}>Add To Cart</MDBBtn>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              )
              :
              (null)
          }
        </div>
      </div>
      <MDBModal staticBackdrop tabIndex='-1' open={staticModal} setOpen={setStaticModal}>
        <MDBContainer className='my-5 bg-white'>
          <MDBModalHeader>
            <MDBModalTitle>Sign In Form</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
          </MDBModalHeader>
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
                  <div className="d-flex justify-content-between mx-4 mb-2">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                  </div>

                  <MDBBtn className="mb-4 w-100" onClick={handleLogin}>Sign in</MDBBtn>

                  <div className="text-center">
                    <p>Not a member? <Link href={"/signupform"}> Register </Link> </p>
                    <p>or sign up with:</p>

                    <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='facebook-f' size="sm" />
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='twitter' size="sm" />
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='google' size="sm" />
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='github' size="sm" />
                      </MDBBtn>

                    </div>
                  </div>
                </MDBCardBody>

              </MDBCol>

            </MDBRow>

          </MDBCard>
        </MDBContainer>
      </MDBModal>
      <div>

      </div>
    </>
  )
}

export default Cartproduct;




{/* <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem itemId={1}>
            <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
            <MDBCarouselCaption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={2}>
            <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
            <MDBCarouselCaption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={3}>
            <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
            <MDBCarouselCaption>
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarousel> */}



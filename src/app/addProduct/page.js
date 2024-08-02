"use client"
import { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBSelect,
    MDBRadio
}
    from 'mdb-react-ui-kit';

function Addproduct() {
    const [productAll, setProductAll] = useState([]);
    const [newProduct, setNewProduct] = useState({
        title: "",
        Discription: "",
        Price: 0,
        status: true,
        image: "",
    });

    const clearStates = () => {
        setNewProduct({
            title: "",
            Discription: "",
            Price: 0,
            image: "",
        })
    }

    const submitHandler = () => {
        clearStates();
        const cloneProducts = [...productAll];
        cloneProducts.push(newProduct);
        setProductAll(cloneProducts);

        localStorage.setItem("products", JSON.stringify(cloneProducts));
    }

    useEffect(() => {
        const fetchData = localStorage.getItem("products");
        const jsonData = JSON.parse(fetchData);
        setProductAll(jsonData)
        // console.log(jsonData);
    }, []);

    return (
        <MDBContainer fluid>

            <MDBRow className='justify-content-center align-items-center m-5'>

                <MDBCard>
                    <MDBCardBody className='px-4'>

                        <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Add Products</h3>
                        <MDBRow>

                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' value={newProduct.title} onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} label=' Name' size='lg' id='form1' type='text' />
                            </MDBCol>

                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' value={newProduct.Discription} onChange={(e) => setNewProduct({ ...newProduct, Discription: e.target.value })} label="Discription" size='lg' id='form2' type='text' />
                            </MDBCol>

                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} label=' Image URL' size='lg' id='form1' type='text' />
                            </MDBCol>

                        </MDBRow>

                        <MDBRow>

                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' value={newProduct.Price} onChange={(e) => setNewProduct({ ...newProduct, Price: e.target.value })} label='Price' size='lg' id='form4' type='email' />
                            </MDBCol>

                        </MDBRow>
                        <MDBRow>

                            <MDBCol md='6' className='mb-4'>
                                <h6 className="fw-bold">Product Status: </h6>
                                <MDBRadio name='inlineRadio' onChange={() => setNewProduct({
                                    ...newProduct,
                                    status: true
                                })}
                                    id='inlineRadio1' value='option1' label='InStock' inline />
                                <MDBRadio name='inlineRadio' id='inlineRadio2' onChange={() => setNewProduct({
                                    ...newProduct,
                                    status: false
                                })
                                } value='option2' label='Out of Stock' inline />
                            </MDBCol>

                        </MDBRow>
                        <MDBBtn className='mb-4' size='lg' onClick={submitHandler}>Submit</MDBBtn>

                    </MDBCardBody>
                </MDBCard>

            </MDBRow>
        </MDBContainer>
    );
}

export default Addproduct;
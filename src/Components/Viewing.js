import React from 'react'
import pic from "../Images/img2.jpg"
import "../style.css"

const Viewing = () => {
    return (
        <>
            <div className="container container-fluid border">
                <h2 className='mt-4 fw-bold'>Students are viewing</h2>
                {/* <div className="container container-fluid border"> */}
                    <div class="row row-cols-5 g-3">
                        <div class="col">
                            <div class="card mb-4" style={{ width: "15rem" }}>
                                <img src={pic} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold" style={{ fontSize: "16px" }}>Title of the course will be written here</h5>
                                    <h6 class="card-subtitle mb-2 text-muted" style={{ fontSize: "13px" }}>Devesh Patel</h6>               
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-4" style={{ width: "15rem" }}>
                                <img src={pic} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold" style={{ fontSize: "16px" }}>Title of the course will be written here</h5>
                                    <h6 class="card-subtitle mb-2 text-muted" style={{ fontSize: "13px" }}>Devesh Patel</h6>               
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{ width: "15rem" }}>
                                <img src={pic} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold" style={{ fontSize: "16px" }}>Title of the course will be written here</h5>
                                    <h6 class="card-subtitle mb-2 text-muted" style={{ fontSize: "13px" }}>Devesh Patel</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{ width: "15rem" }}>
                                <img src={pic} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold" style={{ fontSize: "16px" }}>Title of the course will be written here</h5>
                                    <h6 class="card-subtitle mb-2 text-muted" style={{ fontSize: "13px" }}>Devesh Patel</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style={{ width: "15rem" }}>
                                <img src={pic} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold" style={{ fontSize: "16px" }}>Title of the course will be written here</h5>
                                    <h6 class="card-subtitle mb-2 text-muted" style={{ fontSize: "13px" }}>Devesh Patel</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default Viewing
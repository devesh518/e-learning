import React from 'react'
import pic from "../Images/img2.jpg"
import "../style.css"
import { Link } from 'react-router-dom'

const Dialog = () => {
    return (
        <>
            <div className="container container-fluid">
                <nav class="navbar navbar-expand-lg">
                    {/* <div class="container-fluid"> */}
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Python</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Excel</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Web Development</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">JavaScript</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Data Science</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">AWS Certification</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Drawing</a>
                            </li>
                        </ul>
                    {/* </div> */}
                </nav>
            </div>
            <div className='border container'>
            <div className="container container-fluid ">
                <div className="container container-fluid mt-5">
                    <span className="mt-2"><h3 className="fw-bolder" style={{ fontFamily: "sans-serif", fontWeight: "bolder", fontSize: "27px" }}>Expand your career opportunities with Python</h3></span>
                    <span className=""><p style={{ fontSize: "15px" }} className="fw-semibold">Take one of Udemy's range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You'll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.</p></span>
                    <button className="btn-alert p-2 fw-semibold">Explore Courses</button>
                </div>
            </div>
            <div className="container container-fluid mt-3 border">
                <div className="container container-fluid">
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
            </div>
            </div>
        </>
    )
}

export default Dialog
import React, { Component } from 'react'


export default class Navbar extends Component {
    openNav() {
        if (document.getElementById("openNavbar").value === "false") {
            document.getElementById("mySidenav").style.width = "230px";
            document.getElementById("container").style.marginLeft = "240px"
            document.getElementById("openNavbar").value = "true";
        }
        else if (document.getElementById("openNavbar").value === "true") {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("container").style.marginLeft = "150px"
            document.getElementById("openNavbar").value = "false";
        }
    
    }
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("container").style.marginLeft = "150px"
    }
    render() {
        return (
            <div className="container" id="container">
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-blue">
                    <div id="mySidenav" className="sidenav">
                        <a href="#" className="closebtn" onclick={this.closeNav}>×</a>
                        <div className="avatar"><img src="/img/noavatar.png" width="50px" height="50px" />
                            <a href="/me">
                                mail mail
                            </a>
                            <a href="/me">Edit profile <i style={{ fontSize: 13 }} className="fas"></i></a>
                            <a href="#">Dự án đang tham gia</a>
                            <div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="administrative">
                        <button className="btn btn-link btn-sm order-1 order-lg-0" id="openNavbar" onclick={this.openNav}
                            value="false"><i className="fas fa-bars" style={{ fontSize: 20 }} /> Hội đồng quản trị</button>
                        <a href="/"><button className="btn btn-link btn-sm order-1 order-lg-0">
                            <i className="fas fa-home" style={{ fontSize: 20 }} /> Trang chủ
                        </button></a>
                    </div>
                    <div className="logo"><a href="/home"><img src="/img/7b985146-096f-44b0-9a93-16db0048bfdb_200x200.png" /></a>
                    </div>
                    <form id="src_child" className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                        <div className="input"><input className="form-control" name="terms" type="text" placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2" />
                            <input defaultValue="Submit" type="submit" className="fas fa-search" />
                        </div>
                    </form>
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Create new Project</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <input type="text" className="form-control" placeholder="Name of project" aria-label="Username"
                                        aria-describedby="basic-addon1" />
                                    <input type="text" className="form-control" placeholder="Decription" aria-label="Username"
                                        aria-describedby="basic-addon1" />
                                    <input type="text" className="form-control" placeholder="Amount of members"
                                        aria-label="Username" aria-describedby="basic-addon1" />
                                    <div className="wrapper" />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Add +</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    &nbsp;
                    <div className="dropdown">
                        <ul className="navbar-nav ml-auto ml-md-0">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#"><i className="fas fa-bell"
                                style={{ fontSize: 20, color: 'blue' }} /></a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <p className="dropdown-item" href="#">No Unread Notifications</p>
                            </div>
                        </ul>
                    </div>
                    &nbsp; &nbsp;
                    <ul className="nav">
                        <li>
                            <div className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <svg width="1.5em" height="2em" viewBox="0 0 16 16" className="bi bi-person" fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    </svg>
                                </a>
                                <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
                                    <li><a>Xin chao </a></li>
                                    <li><a href="/me">Profile</a></li>
                                    <li><a href="#">Help</a></li>
                                    <li className="divider" />
                                    <li><a className="logout"><button className="btn btn- primary">Log out</button></a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

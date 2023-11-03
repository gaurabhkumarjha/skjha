import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './Navbar.css'
import Login from './Login'
import Logout from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="/">
                                <img src="https://t3.ftcdn.net/jpg/05/27/90/76/360_F_527907602_yT0DhDWezRiwsawY7OLkptYErjYLBJeC.jpg" alt="Logo" width="40" height="40" class="d-inline-block align-text-top" />
                                @SunilKumarJha
                            </a>

                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav fright">
                                    {isAuthenticated && (
                                        <div>
                                            <p>{user.name}</p>
                                        </div>
                                    )}

                                    {isAuthenticated ?
                                        <div>
                                            <li class="nav-item">
                                                <Logout />
                                            </li>
                                        </div>
                                        :
                                        <div>
                                            <li class="nav-item">
                                                <Login />
                                            </li>
                                        </div>
                                    }

                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href='/'>Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/service">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/location">Location</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/contact">Contact</a>
                                    </li>
                                    <li class="nav-item bgwar">
                                        <a class="nav-link" href="/Offers">Offers!</a>
                                    </li>
                                </ul>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Navbar;
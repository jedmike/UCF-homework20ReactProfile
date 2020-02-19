import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

function Resume () {
    return (

        <div className="container" id="resumePage">
        <div className="embed-responsive embed-responsive-16by9" id="resumePg">
            <object 
                className="embed-responsive-item" 
                data="./jedimages/resume.pdf" 
                type="application/pdf" 
                internalinstanceid="9" 
                title="" 
                id="resP">

                <p>Your browser isn't supporting embedded pdf files. You can download the file
                <a href="#">here</a>.</p>
            </object>
        </div>
    </div>
    )
}
export default Resume;
import React from "react";
import { Link } from "react-router-dom";
// import Card from "../components/Card";
// import "./style.css";

function Portfolio () {
    return (
        <>
        <div className="card-deck">
            <div className="card">
                <img src="./jedimages/green.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Crystal Collector Game</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <a href="https://jedmike.github.io/UCF_homework_week4/" className="btn btn-secondary">Application Link</a>
                    <small className="text-muted">Crystal Collector Game</small>
                </div>
            </div>
        <div className="card">
            <img src="./jedimages/fakeamazon.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Bambazon Shopping</h5>
                <p className="card-text">A simple Mysequel shopping app.</p>
            </div>
            <div className="card-footer">
                <a href="https://github.com/jedmike/UCF_homeworkWeek12_Bambazon" className="btn btn-secondary">Application Link</a>
                <small className="text-muted">Bambazon</small>
            </div>
        </div>
        <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6cz0CA3TR0oxJ6G_lbL6HnCeHKKoYDAQCp7idPrEwNTsQ4Axz&s" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Train TIme</h5>
                <p className="card-text">A Train Time sheduler application.</p>
            </div>
            <div className="card-footer">
                <a href="https://jedmike.github.io/UCF_homeworkweek7 " className="btn btn-secondary ">Application Link</a>
                <small className="text-muted ">Train TIme Train Schweduler</small>
            </div>
        </div>
   </div>

    <div className="card-deck ">
            <div className="card ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8u4y3dB57bmTNSegIDmcidkHdVnE7TYNZeooXhpB8nb5DXbDhdg&s " className="card-img-top " alt="... "/>
                <div className="card-body ">
                    <h5 className="card-title ">Barber Stop</h5>
                    <p className="card-text ">An App to locate barber shops near your location</p>
                </div>
                <div className="card-footer ">
                    <a href="hhttps://github.com/jedmike/UCF-homework-week10" className="btn btn-secondary ">Application Link</a>
                    <small className="text-muted ">Barber Stop: Barber locater</small>
                </div>
            </div>
        <div className="card ">
                    <img src="./jedimages/DSC01109.jpg " className="card-img-top " alt="... "/>
                    <div className="card-body ">
                        <h5 className="card-title ">Friend Finder App</h5>
                        <p className="card-text ">A good Boy, My Best Friend</p>
                    </div>
                    <div className="card-footer ">
                        <a href="https://jedreactprofile.herokuapp.com/ " className="btn btn-secondary ">Application Link</a>
                        <small className="text-muted ">Link Title </small>
                    </div>
        </div>
                <div className="card ">
                    <img src="./jedimages/DSC01107.jpg  " className="card-img-top " alt="... "/>
                    <div className="card-body ">
                        <h5 className="card-title ">Sofi</h5>
                        <p className="card-text ">A Good Girl.</p>
                    </div>
                    <div className="card-footer ">
                        <a href="# " className="btn btn-secondary ">Application Link</a>
                        <small className="text-muted ">Link Title</small>
                    </div>
                </div>
    </div>
      </>   
           
    )
    }

export default Portfolio;
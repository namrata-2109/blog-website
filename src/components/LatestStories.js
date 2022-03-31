import React from 'react';
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './LatestStories.css';


const LatestStories = (props) => {
    return (
        <>

            <div className='hor-cards'>
                <div className="card mb-3 single-card" >
                    <div className="row g-0">
                        <div className="col-md-4 card-image">
                            <img src={props.LSimg} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.LStitle}</h5>
                                <p className="card-text">{props.LSpara}</p>
                                <p className="card-text"><small class="text-muted">{props.LStext}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestStories;

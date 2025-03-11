import React from 'react';

const List = ({data}) => {
    
    // const {data}=props

    const {id,img_url,name,rating,description,cast,watch_url}=data;

    const btn_style={
                    padding:"1.2rem 2.4rem",
                    border:"none",
                    fontSize:"1.6rem",
                    backgroundColor:"var(--btn-hover-bg-color)",
                    color:"var(--bg-color)"
    }
    return (
        <li className='card'>
            <div>
                <img src={img_url} alt="lr.webp" width="30%" height="30%" />

            </div>

            <div className='card-content'>
                <p>Name: {name}</p>

                <p>Rating: <span className={`rating, ${rating>8.5 ? "super_hit" : "average"}`}> {rating}</span></p>

                <p>Description: {description}</p>

                <p>Cast: {cast}</p>

                <a href={watch_url} target="_blank" rel="noopener noreferrer">

                    <button style={btn_style}> Watch now </button>

                </a>

            </div>

        </li>
    );
};

export default List;

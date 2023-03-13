import React from "react";


export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photos, index) {
            console.log(photos);
            return (
              <div className="col-4" key={index}>
                <a href={photos.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photos.src.landscape}
                    className="img-fluid"
                    alt=""
                  />
                  ;
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

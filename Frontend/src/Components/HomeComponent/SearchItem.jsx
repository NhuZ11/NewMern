import React from "react";

const SearchItem = (props) => {
  const { result, onClose } = props;

  return (
    <div>
      <div
        className="modal show"
        style={{ display: "flex", marginTop: "100px" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Search Results</div>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">
              {result.map((item) => (
                <div key={item._id} className="col-md-12 mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src={`http://localhost:5000/uploads/${item.images[0]}`} // Use the correct base URL
                        className="card-img-top"
                        alt={`Image of ${item.title}`}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        {/* Additional item details can be added here */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

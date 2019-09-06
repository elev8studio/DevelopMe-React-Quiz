import React from "react";

const Multiplier = ({ x, y }) => (
    <div className="jumbotron">
        <h4>Multiplier</h4>
        <p>{`${ x } x ${ y } = ${ x * y }`}</p>
    </div>
)

export default Multiplier;
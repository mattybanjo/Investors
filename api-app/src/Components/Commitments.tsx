import React from "react";
import Investor from "../Entity/Investor";

type CommitmentsProps = {
    investor_id: number,
    asset_class: string
}

function Commitments(props: CommitmentsProps) {
    return(
        <div>
            <p>Hello!</p>
        </div>
    );
}

export default Commitments;
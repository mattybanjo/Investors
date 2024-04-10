import React from "react";
import Investor from "../Entity/Investor";

type InvestorDetailsProps = {
    investor: Investor
}

function InvestorDetails(props: InvestorDetailsProps) {

    return (
        <div className="InvestorDetails">
            <h2>{props.investor.firm_name} Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Firm ID</th>
                        <th>Firm Type</th>
                        <th>Date Added</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tr>
                    <td>{props.investor.firm_id}</td>
                    <td>{props.investor.firm_type}</td>
                    <td>{props.investor.date_added.toLocaleString()}</td>
                    <td>{props.investor.address}</td>
                </tr>
                <tbody>
                </tbody>
            </table>
        </div>
    );
}

export default InvestorDetails;
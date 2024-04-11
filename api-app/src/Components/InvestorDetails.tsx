import React, { useState } from "react";
import Investor from "../Entity/Investor";
// import { Container, Dropdown, DropdownButton, DropdownItem } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import CommitmentsTable from "./Commitments";


type InvestorDetailsProps = {
    investor: Investor
}

function InvestorDetails(props: InvestorDetailsProps) {
    const assetClasses = ["pe", "pd", "re", "inf", "nr", "hf"];
    const [assetClass, setAssetClass] = useState("");
    const [assetSelected, setAssetSelected] = useState(false);

    function selectAssetClass(asset: string) {
        setAssetClass(asset);
        setAssetSelected(true);
    }

    return (
        <div className="InvestorDetails">
            <h2>{props.investor.firm_name.toUpperCase()} Details</h2>
            <Container id="asset-dropdown">
                <DropdownButton id="asset-selector" title="Asset Type" menuVariant="dark">
                    <Dropdown.Item onClick={() => selectAssetClass(assetClasses[0])} >
                        Private Equity
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => selectAssetClass(assetClasses[1])}>
                        Private Debt
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => selectAssetClass(assetClasses[2])}>
                        Real Estate
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => selectAssetClass(assetClasses[3])}>
                        Infrastructure
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => selectAssetClass(assetClasses[4])}>
                        Natural Resources
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => selectAssetClass(assetClasses[5])}>
                        Hedge Funds
                    </Dropdown.Item>
                </DropdownButton>
            </Container>

            <Container id="investor-details-table">
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
            </Container>



            {assetSelected && (
                <Container id="commitments">
                    <CommitmentsTable investor_id={props.investor.firm_id} asset_class={assetClass} />
                </Container>
            )}
        </div>
    );
}

export default InvestorDetails;
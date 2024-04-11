import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Investor from "../Entity/Investor";
import CommitmentsTable from "./Commitments";
// import { Container, Dropdown, DropdownButton, DropdownItem } from "react-bootstrap";


type InvestorDetailsProps = {
    investor: Investor
}

function InvestorDetails(props: InvestorDetailsProps) {
    const assetClasses = ["pe", "pd", "re", "inf", "nr", "hf"];
    const assetClassesNames = [
        "Primary Equity",
        "Private Debt",
        "Real Estate",
        "Infrastructure",
        "Natural Resources",
        "Hedge Funds"
    ]
    // const assetClasses = new Map([
    //     ["Primary Equity", "pe"],
    //     ["Private Debt", "re"],
    //     ["Real Estate", "re"],
    //     ["Infrastructure", "inf"],
    //     ["Natural Resources", "nr"],
    //     ["Hedge Funds", "hf"]
    // ]);
    const [assetClass, setAssetClass] = useState("");
    const [assetClassName, setAssetClassName] = useState("");
    const [assetSelected, setAssetSelected] = useState(false);

    function selectAssetClass(index: number) {
        setAssetClass(assetClasses[index]);
        setAssetClassName(assetClassesNames[index]);
        setAssetSelected(true);
    }

    return (
        <div className="InvestorDetails">
            <h2>{props.investor.firm_name.toUpperCase()} Details</h2>
            <Container id="asset-dropdown">
                {/* <DropdownButton id="asset-selector" title="Asset Type" menuVariant="dark">
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
                </DropdownButton> */}

                {/* <DropdownButton id="asset-selector" title="Asset Type" menuVariant="dark">
                    {Object.keys(assetClasses).map((key, index) => (
                        <Dropdown.Item key={index} onClick={() => selectAssetClass(key)}>
                            {key}
                        </Dropdown.Item>
                    ))}
                </DropdownButton> */}
                <DropdownButton id="asset-selector" title="Asset Type" menuVariant="dark">
                    {assetClassesNames.map((key, index) => (
                        <Dropdown.Item key={index} onClick={() => selectAssetClass(index)}>
                            {key}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
            </Container>

            <Container id="investor-details-table">
                {/* <table> */}
                <Table>
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
                </Table>
                {/* </table> */}
            </Container>

            {assetSelected && (
                <Container id="commitments">
                    <CommitmentsTable 
                    investor_id={props.investor.firm_id} 
                    asset_class={assetClass} 
                    asset_class_name={assetClassName} />
                </Container>
            )}
        </div>
    );
}

export default InvestorDetails;
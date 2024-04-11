import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import InvestorsTable from "./InvestorsTable";
import InvestorDetails from "./InvestorDetails";
import Investor from "../Entity/Investor";

function DataTables() {
    const [investorSelected, setInvestorSelected] = useState(false);
    const [selectedInvestor, setSelectedInvestor] = useState({} as Investor);

    function selectInvestor(investor: Investor): void {
        setSelectedInvestor(investor);
        setInvestorSelected(true);
    }

    function deselectInvestor(): void {
        setSelectedInvestor({} as Investor);
        setInvestorSelected(false);
    }

    return (
        <div>
            {investorSelected ? (
                <div>
                    <Container id="investor-details">
                        <InvestorDetails investor={selectedInvestor} deselectInvestor={deselectInvestor}/>
                    </Container>
                </div>
            ) : (
                <Container id="investors-table">
                    <InvestorsTable selectInvestor={selectInvestor} />
                </Container>
            )}

        </div>
    );
}

export default DataTables;
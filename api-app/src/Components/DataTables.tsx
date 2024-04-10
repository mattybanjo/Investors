import React, { useState, useEffect } from "react";
import InvestorsTable from "./InvestorsTable";
import InvestorDetails from "./InvestorDetails";
import Investor from "../Entity/Investor";

function DataTables() {
    const [investorSelected, setInvestorSelected] = useState(false);
    const [selectedInvestor, setSelectedInvestor] = useState({} as Investor);

    function investorSelect(): void {
        setInvestorSelected(true);
    }

    function selectInvestor(investor: Investor): void {
        setSelectedInvestor(investor);
        setInvestorSelected(true);
    }

    return (
        <div>
            {investorSelected ? (
                <div>
                    <InvestorDetails investor={selectedInvestor} />
                </div>
            ) : (
                <InvestorsTable selectInvestor={selectInvestor} investorSelect={investorSelect} />
            )}

        </div>
    );
}

export default DataTables;
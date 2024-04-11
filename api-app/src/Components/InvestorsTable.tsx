import React, { useState, useEffect } from "react";
import Investor from "../Entity/Investor";
import axios from "axios";
import https from "https";

type InvestorsTableProps = {
    selectInvestor: (investor: Investor) => void;
}

function InvestorsTable(props: InvestorsTableProps) {
    const [data, setData] = useState([] as Investor[]);


    async function getInvestors(): Promise<any> {
        const url = "http://localhost:8000/api/investors";

        const httpsAgent = new https.Agent({
            maxVersion: 'TLSv1.3',
            minVersion: 'TLSv1.2'
        });

        try {
            const response = await axios.get(url, {
                httpsAgent: httpsAgent
            });

            setData(response.data as Investor[]);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getInvestors();
    }, []);

    return (
        <div className="InvestorsTable">
            <h2>Data Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Firm ID</th>
                        <th>Firm Name</th>
                        <th>Firm Type</th>
                        <th>Date Added</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((investor, index) => (
                        <tr key={index}>
                            <td onClick={() => props.selectInvestor(investor)}>{investor.firm_id}</td>
                            <td onClick={() => props.selectInvestor(investor)}>{investor.firm_name}</td>
                            <td onClick={() => props.selectInvestor(investor)}>{investor.firm_type}</td>
                            <td onClick={() => props.selectInvestor(investor)}>{investor.date_added.toLocaleString()}</td>
                            <td onClick={() => props.selectInvestor(investor)}>{investor.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default InvestorsTable;
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
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
            <h2>Investors</h2>
            <Container id="all-investors-table">
                <Table>
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
                                <td>
                                    <Button
                                        variant="info"
                                        onClick={() => props.selectInvestor(investor)}
                                    >
                                     {investor.firm_id}   
                                    </Button>
                                </td>
                                <td>{investor.firm_name.toUpperCase()}</td>
                                <td>{investor.firm_type.toUpperCase()}</td>
                                <td>{investor.date_added.toLocaleString().substring(0, 10)}</td>
                                <td>{investor.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default InvestorsTable;
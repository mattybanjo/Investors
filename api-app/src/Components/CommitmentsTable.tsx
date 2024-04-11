import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Commitment from "../Entity/Commitment";
import axios from "axios";
import https from "https";

type CommitmentsTableProps = {
    investor_id: number,
    asset_class: string
    asset_class_name: string;
}

function CommitmentsTable(props: CommitmentsTableProps) {
    const [data, setData] = useState([] as Commitment[]);

    async function getCommitments(): Promise<any> {
        const url = 
        `http://localhost:8000/api/investor/commitment/${props.asset_class}/${props.investor_id}`;

        const httpsAgent = new https.Agent({
            maxVersion: 'TLSv1.3',
            minVersion: 'TLSv1.2'
        });

        try {
            const response = await axios.get(url, {
                httpsAgent: httpsAgent
            });

            setData(response.data as Commitment[]);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getCommitments();
    }, [props.asset_class]);

    return (
        <div className="CommitmentsTable">
            <h2>{props.asset_class_name} Commitments</h2>
            <Container id="commitments-type-table">
                <Table>
                    <thead>
                        <tr>
                            <th>Commitment ID</th>
                            {/* <th>Firm ID</th> */}
                            {/* <th>Asset Class</th> */}
                            <th>Currency</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((asset, index) => (
                            <tr key={index}>
                                <td>{asset.id}</td>
                                {/* <td>{asset.firm_id}</td> */}
                                {/* <td>{asset.asset_class}</td> */}
                                <td>{asset.currency}</td>
                                <td>{asset.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default CommitmentsTable;
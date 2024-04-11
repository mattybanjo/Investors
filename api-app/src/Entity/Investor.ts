interface Investor {
    firm_id: number,
    firm_name: string,
    aum: number,
    date_added: Date,
    last_update: Date,
    established_at: Date,
    firm_type: string,
    city: string,
    country: string,
    address: string,
    postal_code: string
}

export default Investor;
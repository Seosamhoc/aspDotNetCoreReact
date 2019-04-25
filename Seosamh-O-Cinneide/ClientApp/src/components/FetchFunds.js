import React, { Component } from 'react';

export class FetchFunds extends Component {
    static displayName = FetchFunds.name;

    //constructor(props) {
    //    super(props);
    //    this.state = { funds: [], loading: true };

    //    fetch('api/SampleData/funds')
    //        .then(response => response.json())
    //        .then(data => {
    //            console.log(data)
    //            this.setState({ funds: data, loading: false })
    //        });
    //}

    static renderFundsTable = (funds) => {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Text</th>
                        <th>Description</th>
                        <th>Latest Value</th>
                    </tr>
                </thead>
                <tbody>
                    {funds.map(fund =>
                        <tr key={fund.id}>
                            <td>{fund.id}</td>
                            <td>{fund.text}</td>
                            <td>{fund.description}</td>
                            <td>{fund.values[0].valueOfFund}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.props.loading
            ? <p><em>Loading...</em></p>
            : FetchFunds.renderFundsTable(this.props.funds);

        return (
            <div>
                <h1>Funds</h1>
                {contents}
            </div>
        );
    }
}

import React, { Component } from 'react';
import { FetchFunds } from './FetchFunds';
import { Pagination } from './Pagination';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            funds: [],
            pageNumbers: [
                { id: 1, value: 1, active: true },
                { id: 2, value: 2 },
                { id: 3, value: 3 }],
            loading: true,
            pageLength: 100
        };

        var pageNumbers = [{id: 1, value: 1, active: true }];

        fetch('api/SampleData/pages?pageLength=' + this.state.pageLength)
            .then(response => response.json())
            .then(data => {
                for (var i = 2; i <= data; i++) {
                    pageNumbers[i - 1] = { id: i, value: i }
                }
                this.setState({ pageNumbers: pageNumbers })
            });

        fetch('api/SampleData/funds?pageIndex=0')
            .then(response => response.json())
            .then(data => {
                this.setState({ funds: data, loading: false })
            });
    }

    handlePageChange = (pageNumberValue) => {
        let pageNumbers = this.state.pageNumbers;

        let activeIndex = pageNumbers.findIndex(pageNumber => pageNumber.active);
        pageNumbers[activeIndex].active = false; 

        let newActiveIndex = pageNumbers.findIndex(pageNumber => pageNumber.value === pageNumberValue);
        pageNumbers[newActiveIndex].active = true;

        this.setState({ pageNumbers });
        fetch('api/SampleData/funds?pageIndex=' + newActiveIndex)
            .then(response => response.json())
            .then(data => {
                this.setState({ funds: data, loading: false })
            });
    };

    handlePageArrowChange = (direction) => {
        let pageNumbers = this.state.pageNumbers;

        let activeIndex = pageNumbers.findIndex(pageNumber => pageNumber.active);
        pageNumbers[activeIndex].active = false;

        let newActiveIndex = (direction === "next") ? activeIndex + 1 : activeIndex - 1;
        pageNumbers[newActiveIndex].active = true;

        this.setState({ pageNumbers });
        fetch('api/SampleData/funds?pageIndex=' + newActiveIndex)
            .then(response => response.json())
            .then(data => {
                this.setState({ funds: data, loading: false })
            });
    };

    handleSearch = (event) => {
        var pageNumbers = [{ id: 1, value: 1, active: true }];
        console.log(event.target.value);
        fetch('api/SampleData/Search?searchId=' + event.target.value)
            .then(response => response.json())
            .then(data => {
                for (var i = 2; i <= data.length; i++) {
                    pageNumbers[i - 1] = { id: i, value: i }
                }
                this.setState({ funds: data, pageNumbers, loading: false })
            });
    }

    render() {
        return (
            <div className="container" onInput= {this.handleSearch}>
                <input className="form-control" type="search" placeholder="search by id"/>
                <Pagination pageNumbers={this.state.pageNumbers} onPageChange={this.handlePageChange} onPageArrowChange={this.handlePageArrowChange} />
                <FetchFunds funds={this.state.funds} loading={this.state.loading} />
                <Pagination pageNumbers={this.state.pageNumbers} onPageChange={this.handlePageChange} onPageArrowChange={this.handlePageArrowChange} />
            </div>
        );
    }
}

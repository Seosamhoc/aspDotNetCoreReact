import React, { Component } from 'react';
import { PageNumber } from './PageNumber';

export class Pagination extends Component {

    render() {
        let prevClasses = "page-item ";
        let nextClasses = prevClasses;
        prevClasses += (this.props.pageNumbers[0].active) ? "disabled" : "";
        nextClasses += (this.props.pageNumbers[this.props.pageNumbers.length - 1].active) ? "disabled" : "";

        return (
            <nav aria-label="Search results pages">
                <ul className="pagination flex-wrap pagination-sm">
                    <li className={prevClasses}>
                        <a className="page-link" onClick={() => this.props.onPageArrowChange("previous")} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {this.props.pageNumbers.map(pageNumber => (
                        <PageNumber key={pageNumber.id} onPageChange={this.props.onPageChange} value={pageNumber.value} active={pageNumber.active} />
                    ))}
                    <li className={nextClasses}>
                        <a className="page-link" onClick={() => this.props.onPageArrowChange("next")} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}
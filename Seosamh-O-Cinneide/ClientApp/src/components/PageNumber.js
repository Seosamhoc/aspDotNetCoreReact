import React, { Component } from 'react';

export class PageNumber extends Component {

    render() {
        if (this.props.active) {
            return (
                <li className="page-item active">
                    <span className="page-link">
                        {this.props.value}
                        <span className="sr-only">(current)</span>
                    </span>
                </li>

            )
        }
        return (
            <li className="page-item">
                <a className="page-link"
                onClick={() => this.props.onPageChange(this.props.value)}
                >
                    {this.props.value}
                </a>
            </li>
            
        )
    };
}
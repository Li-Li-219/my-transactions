import React from 'react';
import { connect } from "react-redux";
import './transaction-detail.css';
const TransactionDetials = (props) => {
    const id = props.match.params.id;
    const data = props.transactions.filter(el => el.account === id)[0];
    return (
        <div className="transaction-detail">
            
            <h1>transaction {data.account}</h1>
            <hr />
            <div className="transaction-detail-text">
                <div className="text"><label>account no.: </label>{data.account}</div>
                <div className="text"><label>account name: </label>{data.accountName}</div>
                <div className="text"><label>account code: </label>{data.currencyCode}</div>
                <div className="text"><label>amount: </label>{data.amount}</div>
                <div className="text"><label>transaction type:</label>{data.transactionType}</div>
            </div>

        </div>
    )
}
const mapStateToProps = state => {
    return {
        transactions: state.data,
    };
};

export default connect(mapStateToProps)(TransactionDetials);
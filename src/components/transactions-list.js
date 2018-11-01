import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './transactions-list.css'

const TransactionsList = ({ transactions, filterArray }) => {
  transactions = transactions.slice(0, 100);
  let res = [];
  let filtersObj = {};

  // change the filters array into object according to the different filter type
  // expected result: {account name:[saving account, checking account,..], transaction type:[deposit, withdrow,..]}
  filterArray.forEach(el => {
    if (filtersObj[el.type]) {
      filtersObj[el.type].push(el.value);
    } else {
      filtersObj[el.type] = [];
      filtersObj[el.type].push(el.value);
    }
  });

  //filter data according to filters object
  for (let key in filtersObj) {
    res = [];
    filterArray = filtersObj[key];

    for (let el of filterArray) {
      res = res.concat(transactions.filter(data => data[key] === el));
    }

    if (res.length) {
      transactions = res;
    }
  }

  // return result data as a table
  const data = transactions.map((transaction, index) => {
    return (
      <tbody key={transaction.account}>
        <tr>

          <td>
            <Link to={"/transaction/" + transaction.account}>
              {transaction.account}
            </Link>
          </td>

          <td>{transaction.accountName}</td>

          <td>{transaction.currencyCode}</td>

          <td>{transaction.amount}</td>

          <td>{transaction.transactionType}</td>

        </tr>
      </tbody>
    );
  });

  //return table header
  return (
    <table className="transactions-list">

      <thead>
        <tr>
          <th>account no.</th>
          <th>account name</th>
          <th>currency</th>
          <th>amount</th>
          <th>transaction type</th>
        </tr>
      </thead>

      {data}

    </table>
  );
};

const mapStateToProps = state => {
  return {
    transactions: state.data,
    filterArray: state.filterArray
  };
};

export default connect(mapStateToProps)(TransactionsList);

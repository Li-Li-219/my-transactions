import React, { Component } from "react";
import { connect } from "react-redux";
import { addFilter, removeFilter } from "../actions";

class Filters extends Component {

  //add or remove filter
  onChangeHandle = event => {
    if (event.target.checked) {
      this.props.dispatch(
        addFilter({ type: this.props.type, value: event.target.value })
      );
    } else {
      const filter = {
        type: this.props.type,
        value: event.target.value
      };
      this.props.dispatch(removeFilter(filter));
    }
  };

  render() {
    const { name, data } = this.props;

    //filter body
    const filters = data.map(el => {
      return (
        <div key={el}>
          <input
            type="checkbox"
            value={el}
            onChange={event => this.onChangeHandle(event)}
          />
          {el}
        </div>
      );
    });

    //filter head
    return (
      <div className="filter">
        <h3>{name}</h3>
        <div className="filter-detail">
          {filters}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Filters);

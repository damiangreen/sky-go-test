import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./styles.css";
import DeleteButton from "../DeleteButton";
import ToggleButton from "../ToggleButton";

export class ItemsList extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  state = { filterByCompleted: false };

  onFilterByCompletedClicked = () =>
    this.setState({ filterByCompleted: !this.state.filterByCompleted });

  render() {
    const { items } = this.props;
    const { filterByCompleted } = this.state;

    return (
      <div>
        <div>
          Filter by Completed:<input
            className="filterByCompleted"
            type="checkbox"
            checked={filterByCompleted}
            onClick={this.onFilterByCompletedClicked}
          />
        </div>
        <ul className="itemsList-ul">
          {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
          {items
            .filter(item => !filterByCompleted || !item.complete)
            .map(item => (
              <li key={item.id}>
                {item.content}
                <DeleteButton id={item.id} />
                <ToggleButton id={item.id} checked={item.complete} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.todos.items };
};

export default connect(mapStateToProps)(ItemsList);

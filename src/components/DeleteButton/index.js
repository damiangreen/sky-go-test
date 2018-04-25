import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteItem } from "../../logic/todos";
import "./styles.css";

export class DeleteButton extends React.Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
  };

  onDelete = () => {
    const { onDelete, id } = this.props;
    onDelete(id);
  };

  render() {
    return (
      <button className="delete-button" onClick={this.onDelete}>
        remove
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteItem(id))
});

export default connect(null, mapDispatchToProps)(DeleteButton);

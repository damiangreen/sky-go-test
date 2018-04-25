import React from "react";
import { shallow, mount } from "enzyme";
import { DeleteButton } from "../index";

const defaultProps = {
  onDelete: f => f,
  id: 666
};

describe("DeleteButton", () => {
  it("renders without crashing", () => {
    shallow(<DeleteButton {...defaultProps} />);
  });

  it("should call onDelete with id", () => {
    const onDeleteMock = jest.fn();
    const renderedItem = mount(
      <DeleteButton {...defaultProps} onDelete={onDeleteMock} />
    );
    renderedItem.find(".delete-button").simulate("click");
    expect(onDeleteMock.mock.calls.length).toBe(1);
    expect(onDeleteMock.mock.calls[0][0]).toBe(666);
  });
});

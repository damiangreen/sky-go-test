import React from "react";
import { shallow, mount } from "enzyme";
import { ToggleButton } from "../index";

const defaultProps = {
  onToggle: f => f,
  id: 666,
  checked: false
};

describe("ToggleButton", () => {
  it("renders without crashing", () => {
    shallow(<ToggleButton {...defaultProps} />);
  });

  it("should call onToggle with id", () => {
    const onToggleMock = jest.fn();
    const renderedItem = mount(
      <ToggleButton {...defaultProps} onToggle={onToggleMock} />
    );
    renderedItem
      .find(".toggle")
      .simulate("change", { target: { checked: true } });
    expect(onToggleMock.mock.calls.length).toBe(1);
    expect(onToggleMock.mock.calls[0][0]).toBe(666);
  });
});

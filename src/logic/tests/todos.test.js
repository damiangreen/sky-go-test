import reducer, {
  initialState,
  addItem,
  deleteItem,
  toggleItemCompletion
} from "../todos";

describe("reducer", () => {
  it("should return state for unknown action", () => {
    const mockState = { test: "testItem" };
    const mockAction = { type: "mystery-meat" };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it("should use initial state if state not provided", () => {
    const mockAction = { type: "mystery-meat" };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it("should add new items on ADD_ITEM", () => {
    const state = {
      items: [{ id: 1, content: "first" }, { id: 2, content: "second" }]
    };
    const mockAction = addItem("third");
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].id).toEqual(3);
    expect(result.items[2].content).toEqual("third");
  });

  it("should remove an item on DELETE_ITEM", () => {
    const state = {
      items: [{ id: 1, content: "first" }, { id: 2, content: "second" }]
    };
    const mockAction = deleteItem(1);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(1);
    expect(result.items[0].id).toEqual(2);
    expect(result.items[0].content).toEqual("second");
  });

  it("should toggle an item on TOGGLE_ITEM_COMPLETION", () => {
    const state = {
      items: [
        { id: 1, content: "first", complete: false },
        { id: 2, content: "second", complete: false }
      ]
    };
    const mockAction = toggleItemCompletion(1);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(2);
    expect(result.items[0].complete).toEqual(true);
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import MenuCard, { MenuItem } from "../MenuCard";

describe("MenuCard", () => {
  const items: MenuItem[] = [
    { id: "1", title: "Item 1", component: <div>Item 1</div> },
    { id: "2", title: "Item 2", component: <div>Item 2</div> },
    { id: "3", title: "Item 3", component: <div>Item 3</div> },
  ];

  it("should render all items", () => {
    const onMenuChange = jest.fn();
    const { getByText } = render(
      <MenuCard
        className="test-class"
        items={items}
        onMenuChange={onMenuChange}
      />
    );

    items.forEach((item) => {
      expect(getByText(item.title)).toBeInTheDocument();
    });
  });

  it("should call onMenuChange when an item is clicked", () => {
    const onMenuChange = jest.fn();
    const { getByText } = render(
      <MenuCard
        className="test-class"
        items={items}
        onMenuChange={onMenuChange}
      />
    );

    fireEvent.click(getByText(items[0].title));

    expect(onMenuChange).toHaveBeenCalledWith(items[0]);
  });
});

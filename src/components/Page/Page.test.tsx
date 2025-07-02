import "@testing-library/jest-dom";
import { Page } from ".";
import { render } from "@testing-library/react";

describe("Page", () => {
  it("renders title and children", () => {
    // Arrange
    const title = "Test Title";
    const children = "Test Children";
    const { getByText } = render(<Page title={title}>{children}</Page>);

    // Act
    const titleElement = getByText(title);
    const childrenElement = getByText(children);

    // Assert
    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });
});
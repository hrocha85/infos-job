import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "./index";

describe("SearchInput Component", () => {
  it("should render input with search icon", () => {
    const mockOnSearchChange = jest.fn();

    render(<SearchInput onSearchChange={mockOnSearchChange} />);

    const searchIcon = screen.getByTestId("SearchIcon");
    expect(searchIcon).toBeInTheDocument();

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("should update input value and call onSearchChange when typing", () => {
    const mockOnSearchChange = jest.fn();

    render(<SearchInput onSearchChange={mockOnSearchChange} />);

    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "React" } });

    expect(inputElement).toHaveValue("React");

    expect(mockOnSearchChange).toHaveBeenCalledTimes(1);
    expect(mockOnSearchChange).toHaveBeenCalledWith("React");
  });

  it("should render input with an empty initial value", () => {
    const mockOnSearchChange = jest.fn();

    render(<SearchInput onSearchChange={mockOnSearchChange} />);

    const inputElement = screen.getByRole("textbox");

    expect(inputElement).toHaveValue("");
  });

  it("should not call onSearchChange on initial render", () => {
    const mockOnSearchChange = jest.fn();

    render(<SearchInput onSearchChange={mockOnSearchChange} />);

    expect(mockOnSearchChange).not.toHaveBeenCalled();
  });

  it("should call onSearchChange multiple times as user types", () => {
    const mockOnSearchChange = jest.fn();

    render(<SearchInput onSearchChange={mockOnSearchChange} />);

    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "R" } });
    fireEvent.change(inputElement, { target: { value: "Re" } });
    fireEvent.change(inputElement, { target: { value: "React" } });

    expect(mockOnSearchChange).toHaveBeenCalledTimes(3);

    expect(mockOnSearchChange).toHaveBeenLastCalledWith("React");
  });
});

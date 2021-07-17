import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// create a customRender that wraps the UI in a memory Router
const customRender = (ui, options) => {
  return render(ui, { wrapper: BrowserRouter, ...options });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
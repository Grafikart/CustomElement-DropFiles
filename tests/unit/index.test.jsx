/* eslint-env node, jest */

import { h } from "preact";
import render from "preact-render-to-string";
import DropFiles from "../../src/components/drop-files/index";

describe("DropFiles Snapshot", () => {
  it("should render DropFiles with content", () => {
    const tree = render(<DropFiles />);
    expect(tree).toMatchSnapshot();
  });
});

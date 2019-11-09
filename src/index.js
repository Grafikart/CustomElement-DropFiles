let poly = require("preact-cli/lib/lib/webpack/polyfills");
import { h, render } from "preact";
import Widget from "./components/drop-files";
import registerCustomElement from "preact-custom-element";
registerCustomElement(Widget, "drop-files", ["name", "help", "label"]);

import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import scrollFunction from "./scripts/scrollFunction";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
scrollFunction();
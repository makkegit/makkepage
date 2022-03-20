import type { ICode } from "@/interfaces/ICode";
import { Code } from "./Code";
import { Project } from "./Project";
import { CodeLanguages, CodeImages } from "./CodeLangs";

type Stack = Array<ICode>;

const project1_stack: Stack = [
  new Code(CodeLanguages.ARDUINO, CodeImages.ARDUINO),
  new Code(CodeLanguages.CPP, CodeImages.CPP),
];

const project2_stack: Stack = [
  new Code(CodeLanguages.VUE, CodeImages.VUE),
  new Code(CodeLanguages.TYPESCRIPT, CodeImages.TYPESCRIPT),
];

export const PROJECT1 = new Project(
  "Access Point Web Server",
  "p1_desc",
  "https://github.com/makkegit/APWebServer",
  "project1_img",
  project1_stack
);

export const PROJECT2 = new Project(
  "Makke page",
  "p2_desc",
  "https://github.com/makkegit/APWebServer",
  "project2_img",
  project2_stack
);

export const PROJECTS = {
  PROJECT1,
  PROJECT2,
};

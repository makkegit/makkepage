import type { ICode } from "@/interfaces/ICode";
import { Code } from "./Code";
import { Project } from "./Project"
import { CodeLanguages, CodeImages } from "./CodeLangs"

type Stack = Array<ICode>;

const project1_stack: Stack = [
    new Code(CodeLanguages.ARDUINO, CodeImages.ARDUINO),
    new Code(CodeLanguages.CPP, CodeImages.CPP),
];

export const PROJECT1 = new Project(
    "Access Point Web Server",
    "p1_desc",
    "https://github.com/makkegit/APWebServer",
    "project1_img",
    project1_stack
);

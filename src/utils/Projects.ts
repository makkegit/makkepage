import type { ICode } from "@/interfaces/ICode";
import { Code } from "./Code";
import { Project } from "./Project"

type Stack = Array<ICode>;

const project1_stack: Stack = [
    new Code("Arduino", "Arduino_Logo")
];

export const PROJECT1 = new Project(
    "Access Point Web Server",
    "p1_desc",
    "https://github.com/makkegit/APWebServer",
    "project1_img",
    project1_stack
);

import type { ICode } from "@/interfaces/ICode";
import type { IProject } from "@/interfaces/IProject";

export class Project implements IProject {
  name: string;
  description: string;
  link: string;
  image: string;
  stack: Array<ICode>;

  constructor(
    name: string,
    description: string,
    link: string,
    image: string,
    stack: Array<ICode>
  ) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.image = image;
    this.stack = stack;
  }
}

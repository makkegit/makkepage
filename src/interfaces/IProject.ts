import type { ICode } from "./ICode";

export interface IProject {
  name: string;
  description: string;
  link: string;
  image: string;
  stack: Array<ICode>;
}

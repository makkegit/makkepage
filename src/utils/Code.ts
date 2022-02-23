import type { ICode } from "@/interfaces/ICode";
import type { CodeLanguages, CodeImages } from "./CodeLangs"

export class Code implements ICode {
  name: CodeLanguages;
  logo: CodeImages;
  constructor(codeName: CodeLanguages, codeLogo: CodeImages) {
    this.name = codeName;
    this.logo = codeLogo;
  }
}

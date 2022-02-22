import type { ICode } from "@/interfaces/ICode";

export class Code implements ICode {
  name: string;
  logo: string;
  constructor(codeName: string, codeLogo: string) {
    this.name = codeName;
    this.logo = codeLogo;
  }
}

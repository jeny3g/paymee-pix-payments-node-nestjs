import { DocumentTypes } from "src/shared/constants/document-types";
import { ErrorMessages } from "src/shared/constants/error-messages";

type DocumentProps = {
  id: string;

  type: string;
  number: string;
}

export class Document{
  private _id:string;
  private props: DocumentProps;

  constructor(props:  DocumentProps){
    const isDocumentValid = this.validateDocument(props);
    this._id = props.id;
    this.props = {...props};
  }

  get id(){
    return this._id;
  }

  get type(){
    return this.props.type;
  }

  get number(){
    return this.props.number;
  }

  private validateDocument(props: DocumentProps){
    if(props.type === DocumentTypes.CPF){
      return this.validateCPF(props.number);
    }else if(props.type === DocumentTypes.CNPJ){
      return this.validateCNPJ(props.number);
    }else{
      throw new Error(ErrorMessages.INVALID_DOCUMENT_TYPE);
    }
  }

  private validateCPF(cpf: string){
    if(cpf.length !== 11){
      throw new Error("Invalid CPF");
    }
    return true;
  }

  private validateCNPJ(cnpj: string){
    if(cnpj.length !== 14){
      throw new Error("Invalid CNPJ");
    }
    return true;
  }
}

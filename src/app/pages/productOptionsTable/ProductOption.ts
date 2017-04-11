export class ProductOption {
  id: number;
  attributeName: string;
  optionType: string;
  required: boolean;

  constructor(id: number,
              attributeName: string,
              optionType: string,
              required: boolean) {
    this.id = id;
    this.attributeName = attributeName;
    this.optionType = optionType;
    this.required = required;
  }

}

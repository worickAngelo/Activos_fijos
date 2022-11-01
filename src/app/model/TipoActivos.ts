export class TipoActivo{
  constructor(
    public _id: string,
    public descripcion: string,
    public cuentaContableCompra: number,
    public cuentaContableDepreciacion:number,
    public estado:boolean,
  ){}
}

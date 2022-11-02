export class TipoActivo{
  constructor(
    public tipoActivoId: number,
    public descripcion: string,
    public cuentaContableCompra: number,
    public cuentaContableDepreciacion:number,
    public estado:boolean,
  ){}
}

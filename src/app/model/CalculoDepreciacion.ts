export class CalculoDepreciacion{
  constructor(
    public _id: string,
    public añoProceso: number,
    public mesProceso: number,
    public activoFijoId:number,
    public fechaProceso:string,
    public montoDepreciado: number,
    public cuentaCompra: number,
    public cuentaDepreciacion: number,

  ){}
}

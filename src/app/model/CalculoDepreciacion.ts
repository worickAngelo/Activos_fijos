export class CalculoDepreciacion{
  constructor(
    public calculoDepreciacionId: string,
    public añoProceso: number,
    public mesProceso: number,
    public activoFijoId:number,
    public fechaProceso:string,
    public montoDepreciado: number,
    public cuentaCompra: number,
    public cuentaDepreciacion: number,

  ){}
}

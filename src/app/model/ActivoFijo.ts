export class ActivosFijo{
  constructor(
    public activoFijoId:number,
    public descripcion: string,
    public departamentoId: number,
    public tipoActivoId:number,
    public fechaRegistro:string,
    public valorCompra: number,
    public depreciacionAcumulada: number

  ){}
}

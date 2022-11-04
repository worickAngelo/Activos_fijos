export class Empleado{
  constructor(
    public empleadoId: number,
    public nombre: string,
    public cedula: string,
    public departamentoId:number,
    public tipoPersonaId:number,
    public fechaIngreso: string,
    public estado: boolean

  ){}
}

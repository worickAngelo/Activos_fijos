export class Empleado{
  constructor(
    public _id: string,
    public nombre: string,
    public cedula: string,
    public departamentoId:number,
    public tipoPersonaId:number,
    public fechaIngreso: string,
    public estado: boolean

  ){}
}

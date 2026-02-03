import './informacion.css';

function Informacion(props) {
  let user = props
if(user){
  return (
    <div className="informacion">
      <h2>Información Adicional</h2>
      <p>
        Esta sección proporciona información adicional sobre el tema tratado en la aplicación.
      </p>
    </div>
  );
}
 return(
  <div><h3>No hay datos</h3></div>
 )
}
export default Informacion;
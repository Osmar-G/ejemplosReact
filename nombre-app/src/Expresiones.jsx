function Expresiones(){
    const nombre = "Osmar Gael";
    const apellidos = "Ortega Lucas";
    return(
     <div>
        <Lista />
        <h2>Uso de Expresiones</h2>
        <h3>Tu nombre es : {nombre} y tus apellidos son: {apellidos}</h3>
        </div>
        )
}
function Lista(){
    const users = [
        {id: 1, nombre: "Osmar", role:"Web Developer"},
        {id: 2, nombre: "Juan", role:"Designer"},
        {id: 3, nombre: "Ana", role:"Team Leader"},
    ]
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Nombre |</th>
                        <th>Role</th>
                    </tr>
                    <tr>
                    {
                        users.map(function(user,index) {
                            return(
                                <tr key={index}>
                                    <td>{user.nombre} | </td>
                                    <td>{user.role}</td>
                                </tr>
                            )
                        })
                    }


                    </tr>
                </tbody>

            </table>
        </div>
    )
}
export default Expresiones;

export const TiposBasicos = () => {

    const nombre: string = 'Brandon';
    const edad: number = 26;
    const estaActivo: boolean = true;
    const poderes: string[] = ["Velocidad", "Volar", "Respirar en el agua"]

    return (
        <>
            <h3>Tipos Basicos</h3>
           { nombre }, { edad }, { {estaActivo} ? "Activo" : "Inactivo"}
           <br />
           { poderes.join(", ") }
        </>
    )
}

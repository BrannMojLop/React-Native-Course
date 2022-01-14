import { useState, useRef, useEffect } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';

export const useUsuarios = () => {

    const [ usuarios, setUsuarios ] = useState<Usuario[]>([])

    const paginaRef = useRef(1);

    useEffect(() => {
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {

        // Llamado al API
        const res = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if( res.data.data.length > 0 ) {
            setUsuarios( res.data.data );
        } else {
            paginaRef.current --;
            alert( "No hay mas usuarios" );
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if ( paginaRef.current > 1 ) {
            paginaRef.current --;
        } else {
            alert( "Ya te encuentras en la primer pagina" )
        }
        cargarUsuarios();
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }

}
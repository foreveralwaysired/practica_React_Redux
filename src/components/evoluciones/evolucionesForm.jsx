import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown';
import React, { useState } from 'react'
import { useAuthStore } from '../../hooks/authHooks/useAuthStore';
import { InputText } from "primereact/inputtext";

export const EvolucionesForm = (props) => {

    const { starChangeValue } = useAuthStore();

    const [ciudades, setCiudades] = useState();
    const [nombre, setNombre] = useState();
    const [id, setId] = useState();

    const enviar = (datos) => {

    }

    return (
        <div>
            <div className='grid'>
                <div className='col-12'>
                    {/* <NuevaEvolucionForm /> */}
                    <InputText value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className='col-12'>
                    <InputText value={id} onChange={(e) => setId(e.target.value)} />
                </div>
                <div className='col-12'>
                    <Button
                        onClick={() => enviar({ nombre, id })}
                    />
                </div>
            </div>
        </div>
    )
}

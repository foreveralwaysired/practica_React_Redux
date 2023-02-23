import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export const NuevaEvolucionForm = () => {

    const [evolucion, setEvolucion] = useState('');
    const [idEvolucion, setIdEvolucion] = useState('');

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <label htmlFor="idEvolucion">Id Evolución</label>
            <InputText
                className='inputRed'
                name='idEvolucion'
                value={idEvolucion}
                onChange={(e) => setIdEvolucion(e.target.value)}
            />

            <label htmlFor="evolucion">Evolución</label>
            <InputText
                name='evolucion'
                value={evolucion}
                onChange={(e) => setEvolucion(e.target.value)}
            />
            <Button label="Click" icon="pi pi-check" type='button' onClick={() => onSubmit({ evolucion, idEvolucion })} />
        </>
    )
}
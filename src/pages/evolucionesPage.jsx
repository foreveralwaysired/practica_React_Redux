import React, { useEffect, useState } from 'react'
import { EvolucionesForm } from '../components/evoluciones/evolucionesForm'
import { useAuthStore } from '../hooks/authHooks/useAuthStore'
import { TestPage } from './testPage';

export const EvolucionesPage = () => {

    const { profileSelected, status, } = useAuthStore();

    const [value, setValue] = useState(
        [{
            name: "test", id: 1
        }]
    );

    useEffect(() => {
        if (value) {

        }
    }, [])

    console.log("Este es Value", value);


    return (
        <div>
            <h1>Evoluciones</h1>
            <hr />

            <EvolucionesForm lstDropdown={value} agregarOtro={setValue} />

            <TestPage />
            <hr />
        </div>
    )
}
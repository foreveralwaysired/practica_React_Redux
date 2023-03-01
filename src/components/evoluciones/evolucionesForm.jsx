import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown';
import React, { useState } from 'react'
import { useAuthStore } from '../../hooks/authHooks/useAuthStore';

export const EvolucionesForm = (props) => {

    const { starChangeValue } = useAuthStore();

    const [ciudades, setCiudades] = useState();

    return (
        <div>
            <div className='grid'>
                <div className='col-12'>
                    {/* <NuevaEvolucionForm /> */}
                    <Dropdown
                        value={ciudades}
                        onChange={(e) => setCiudades(e.value)}
                        options={props.lstDropdown}
                        optionLabel="name"
                        placeholder="Select a City" className="w-full md:w-14rem"
                    />
                </div>

                <div className='col-12'>
                    <Button
                        className='mt-4'
                        label='test'
                        onClick={() => starChangeValue([...props.lstDropdown, { name: "Pokemon", id: 2 }])}
                    />
                </div>
            </div>
        </div>
    )
}

import { Button } from 'primereact/button'
import React, { useState } from 'react'
import { useAuthStore } from '../../hooks/authHooks/useAuthStore';
import { InputText } from "primereact/inputtext";
import { FormProvider, useForm } from 'react-hook-form';
import { FormInputText } from '../ui/formInputText';
import { usePokeApiStore } from '../../hooks/evoluciones/usePokeApiStore';


export const EvolucionesForm = (props) => {

    const { starChangeValue } = useAuthStore();
    const { pokemons, getPokemon } = usePokeApiStore();

    const [ciudades, setCiudades] = useState();
    const [nombre, setNombre] = useState();
    const [id, setId] = useState();

    const methods = useForm();

    const enviar = (datos) => {
        console.log("datos", datos);
        getPokemon(datos.id);
        // props.agregarOtro(datos);
        // starChangeValue(datos);
    }
    
    return (
        <FormProvider {...methods}>
            <form className='grid' onSubmit={methods.handleSubmit(enviar)}>
                <div className='col-12'>
                    {/* <NuevaEvolucionForm /> */}
                    <FormInputText name="id" label="id del pokemon"/>
                </div>
                <div className='col-12'>
                    <FormInputText name="nombre" label="nombre del pokemon"/>
                </div>
                <div className='col-12'>
                    <Button label='Guardar'/>
                </div>
            </form>
        </FormProvider>
    )
}

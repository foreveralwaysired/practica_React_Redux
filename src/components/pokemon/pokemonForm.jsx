import { Button } from 'primereact/button';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form'
import { usePokemonStore } from '../../hooks/pokemon/usePokemonStore';
import { FormInputText } from '../ui/formInputText';

export const PokemonForm = () => {
    const methods = useForm();
    const { ObtenerPokemonId, nombre } = usePokemonStore();

    const onSubmit = (data) => {
        // console.log("Entrando");
        ObtenerPokemonId(data.id);
    }

    useEffect(() => {
        if (nombre !== "") {
            methods.setValue("nombre", "Cambio el reducer");
        }
    }, [nombre])

    return (
        <FormProvider {...methods}>
            <form className='grid' onSubmit={methods.handleSubmit(onSubmit)}>
                <div className='col-4'>
                    {/* <NuevaEvolucionForm /> */}
                    <FormInputText className="w-full" name="id" label="id del pokemon" />
                </div>
                <div className='col-4'>
                    <FormInputText className="w-full" name="nombre" label="nombre del pokemon" />
                </div>
                <div className='col-4'>
                    <Button label='Guardar' className="w-full" />
                </div>
            </form>
        </FormProvider>
    )
}

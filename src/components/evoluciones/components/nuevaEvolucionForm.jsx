import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export const NuevaEvolucionForm = () => {

    const [value, setValue] = useState('')

    return (
        <div>
            <InputText value={value} onChange={(e) => setValue(e.target.value)} />

            <Button label="Click" icon="pi pi-check" />
        </div>
    )
}

import React from 'react'
import { useAuthStore } from '../hooks/authHooks/useAuthStore'

export const TestPage = () => {
    const { value } = useAuthStore();


    return (
        <div>
            Desde Test
            {value.map((item) => {
                return (
                    <div key={item.id}>
                        {item.name}
                    </div>
                )
            })
            }
        </div>
    )
}

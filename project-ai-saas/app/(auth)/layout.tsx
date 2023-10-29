import React from 'react'

const AuthLayout = (props: {
    children: React.ReactNode
}) => {
    return (
        <div className='flex items-center justify-center h-full'>
            {props.children}
        </div>
    )
}

export default AuthLayout
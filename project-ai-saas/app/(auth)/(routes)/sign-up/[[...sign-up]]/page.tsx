import { SignUp } from "@clerk/nextjs";
import React from 'react'

const SignUpPage = () => {
    return (
        <div className="flex">
            <SignUp />
        </div>
    )
}

export default SignUpPage
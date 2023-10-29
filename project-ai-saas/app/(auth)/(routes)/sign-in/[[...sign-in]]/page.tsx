import { SignIn } from "@clerk/nextjs";
import React from 'react'

const SignInPage = () => {
    return (
        <div className="flex">
            <SignIn />
        </div>
    )
}

export default SignInPage
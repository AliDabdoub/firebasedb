import React from 'react'
import { signInWithGooglePopup } from '../src/utils/firebase.utils'

export default function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

  return (
    <div>
        <h4>Sign In!</h4>
        <button onClick={logGoogleUser}>
            Sign in with Gooogle Popup
        </button>
    </div>
  )
}

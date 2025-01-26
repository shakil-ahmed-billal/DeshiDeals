import { SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

const Header = async () => {

    const { userId } = await auth()


    return (
        <div>
            <div className="bg-gray-400 w-full p-5">
                <div className="flex justify-between w-10/12 mx-auto">
                    <h1>Logo</h1>
                    <div className="">
                        {!userId ? <SignInButton /> 
                        : <div className="app">
                            <SignedOut>
                            </SignedOut>
                            <UserButton />
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
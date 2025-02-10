import categories from '@/utils/desplayData';
import { SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { FacebookIcon, InstagramIcon, Search, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = async () => {

    const { userId } = await auth()


    return (
        <div className=''>
            <div className="flex justify-between w-10/12 mx-auto my-2">
                <h1 className='uppercase'>Discover The New You</h1>
                <div className="flex gap-3 items-center">
                    <p><FacebookIcon></FacebookIcon></p>
                    <p><InstagramIcon></InstagramIcon></p>
                </div>
            </div>
            <div className="bg-black w-full py-5 text-gray-100">
                <div className="flex justify-between w-10/12 mx-auto items-center">
                    <Link href={"/"}>
                    <Image
                        src={'/desi-deals.jpg'}
                        height={100}
                        width={150}
                        alt='Brand Logo'
                    ></Image>
                    </Link>
                    <div className="hidden text-sm text-[#c7cbce] md:flex flex-wrap gap-3 items-center justify-start">
                        {categories.slice(0, 10).map(category => <Link href={`/category/${category.category}`} className='mr-3' key={category?.id}>{category?.category}</Link>)}
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <p><Search /></p>
                        <div className="flex items-center">
                            {!userId ? <div className="text-sm w-16 justify-center flex items-center">
                                <SignInButton />
                            </div>
                                : <div className="app">
                                    <SignedOut>
                                    </SignedOut>
                                    <UserButton />
                                </div>}
                        </div>
                        <p className='text-sm'>$0.00</p>
                        <p><ShoppingBag /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
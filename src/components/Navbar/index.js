import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <div className='navbar'>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Image
                    width={40}
                    height={40}
                    src={session?.user?.image}
                    alt='User profile image'
                    style={{ borderRadius: 50 }}
                />
                <p>{session?.user?.name}</p>
            </div>
            <button className='TEMP-btn-logout' onClick={() => signOut()}>
                Sair
            </button>
        </div>
    );
}

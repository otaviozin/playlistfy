'use client';
import { useSession } from 'next-auth/react';
import { signIn, signOut } from 'next-auth/react';

export default function Home() {
    const { data: session } = useSession();

    console.log(session);

    if (session) {
        return (
            <div>
                <p>Signed In as</p>
                <span>{session?.user?.name}</span>
                <p onClick={() => signOut()}>Sign Out</p>
            </div>
        );
    } else {
        return <button onClick={() => signIn('spotify')}>Sign In</button>;
    }
}

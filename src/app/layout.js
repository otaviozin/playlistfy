import { Inter } from 'next/font/google';
import AuthProvider from './AuthProvider';
import '@/styles/output.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
};

export default function RootLayout({ children }) {
    return (
        <html style={{ backgroundColor: '#121212' }} lang='pt-br'>
            <body className={inter.className}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}

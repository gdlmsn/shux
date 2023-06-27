import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
export const metadata = {
  title: 'ux-ui app',
  description: 'project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

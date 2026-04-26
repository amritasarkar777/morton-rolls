import './globals.css';

export const metadata = {
  title: 'Mortons Rolls',
  description: 'We built this city on great rolls.'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

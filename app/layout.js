import './globals.css';

export const metadata = {
  title: 'Mortons Rolls',
  description: 'We built this city on great rolls.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

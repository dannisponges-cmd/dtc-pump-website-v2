import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DTC Pump | Hydraulic Pumps & Parts Supplier',
  description: 'DTC Pump supplies hydraulic pumps, pump parts, piston pumps, vane pumps, gear pumps and hydraulic motors for industrial and construction machinery.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

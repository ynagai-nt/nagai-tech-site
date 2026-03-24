// src/app/layout.tsx
export const metadata = {
    title: 'NagAI Tech',
    description: 'Urban Planning x AI',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="ja">
        <body>{children}</body>
      </html>
    )
  }
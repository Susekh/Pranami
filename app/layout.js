import "./globals.css";

export const metadata = {
  title: "Pranami Charity Foundation",
  description:
    "Empowering communities through education, healthcare, and social development initiatives. Join us in making a lasting impact.",
  keywords: [
    "Charity",
    "NGO",
    "Nonprofit",
    "Education",
    "Healthcare",
    "Community Service",
    "Volunteer",
    "Pranami Foundation",
  ],
  authors: [{ name: "Pranami Charity Foundation", url: "https://yourdomain.com" }],
  creator: "Pranami Charity Foundation",
  icons: {
    icon: "/favicon.jpeg",
  },
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Pranami Charity Foundation",
    description:
      "Empowering communities through education, healthcare, and social development initiatives.",
    url: "https://yourdomain.com",
    siteName: "Pranami Charity Foundation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pranami Charity Foundation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranami Charity Foundation",
    description:
      "Empowering communities through education, healthcare, and social development initiatives.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <link rel="icon" href="/favicon.jpeg" sizes="any" />
      <body className="text-[#0e1b18] bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

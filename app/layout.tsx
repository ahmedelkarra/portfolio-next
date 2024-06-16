import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logo from "@/public/logo.svg"
import Hero from "@/components/Hero";
import MainControl from "@/components/MainControl";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio's Ahmed Aly",
  description: "This is the portfolio of Ahmed Aly",
  icons: { icon: logo.src },
  keywords: `
    Ahmed Aly,
    Ahmed Aly portfolio,
    Ahmed Aly web developer,
    portfolio,
    web developer,
    projects,
    JavaScript,
    React,
    Next.js,
    HTML,
    CSS,
    frontend developer,
    software engineer,
    developer portfolio,
    full-stack developer,
    programming,
    coding,
    software development,
    responsive design,
    UX/UI design,
    Git,
    GitHub,
    APIs,
    RESTful services,
    Node.js,
    Express.js,
    MongoDB,
    SQL,
    database management,
    cloud computing,
    AWS,
    Azure,
    agile methodologies,
    scrum,
    technology,
    innovation,
    tech enthusiast,
    software solutions,
    mobile development,
    web applications,
    SaaS,
    technical skills,
    professional developer,
    coding bootcamp,
    online portfolio,
    tech projects,
    open source contributions,
    personal website,
    digital portfolio,
    modern web technologies,
    web performance optimization,
    cross-browser compatibility,
    website security,
    clean code,
    debugging,
    software testing,
    continuous integration,
    continuous deployment,
    web design,
    user experience,
    user interface,
    tech trends,
    personal branding,
    tech skills,
    software engineering best practices,
    programming languages,
    software architecture,
    code quality,
    web development tutorials
  `
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={logo.src} />
      </head>
      <body className={inter.className && 'grid grid-cols-12 min-h-[100dvh] gap-4 justify-center items-center bg-white'}>
        <Header />
        <Hero />
        <MainControl />
        {children}
        <Footer />
      </body>
    </html>
  );
}

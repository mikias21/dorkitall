'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Provider} from "react-redux";
import {store} from "../store"
import DarkModeToggle from '../Components/DarkModeToggle';
import UserAccountButton from '../Components/UserAccountButton';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "dorkitall",
//   description: "Make dorking easy",
// };


export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <DarkModeToggle />
          <UserAccountButton />
          {children}
        </body>
      </html>
    </Provider>
  );
}

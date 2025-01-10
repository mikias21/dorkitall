'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Provider} from "react-redux";
import {store} from "../store"
import DarkModeToggle from '../Components/DarkModeToggle';
import UserAccountButton from '../Components/UserAccountButton';
import {metadata} from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <DarkModeToggle />
          {children}
        </body>
      </html>
    </Provider>
  );
}

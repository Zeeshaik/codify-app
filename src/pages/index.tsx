import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Topbar from "@/components/Topbar/Topbar";
import Link from "next/link";
import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { firestore } from "@/firebase/firebase";
import HeroSec from "@/components/HomePage/HeroSec";

import Footer from "@/components/Footer/Footer";
import Sections from "@/components/Sections/Sections";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MemoryGame from "@/components/MemoryGame/MemoryGame";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="bg-dark-layer-2 min-h-screen">
        <Topbar />
        <HeroSec />
        <Sections />
        <br /><br /><br />
        <MemoryGame />
        <Footer />
      </main>
    </>
  );
}

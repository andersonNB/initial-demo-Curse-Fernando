import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <MainLayout>
        <h1>index - Home Page</h1>
      </MainLayout>
    </>
  )
}

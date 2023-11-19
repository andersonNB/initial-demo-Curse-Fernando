import React from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'
const inter = Inter({ subsets: ['latin'] })
const AboutPage = () => {
    return (
        <>
            <h1>
                Contenido del about
            </h1>
        </>
    )
}


//agregando el Layout al prototipo
AboutPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}

export default AboutPage
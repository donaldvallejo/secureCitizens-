import React, { useEffect } from 'react'
import { Layout } from '../../layout'
import { BandContent } from '../../containers';

export default function BandsPage() {

    useEffect(() => {
        document.title = "The Rockademy | Band Program"
    })

    return (
        <Layout>
            <BandContent />
        </Layout>
    )
}

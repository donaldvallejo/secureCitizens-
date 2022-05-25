import React, { useEffect } from 'react'
import { Layout } from '../../layout'
import { LessonsContent } from '../../containers';

export default function LessonsPage() {

    useEffect(() => {
        document.title = "The Rockademy | Lessons"
    })

    return (
        <Layout>
            <LessonsContent />
        </Layout>
    )
}

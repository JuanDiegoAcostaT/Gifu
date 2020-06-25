import { useEffect, useRef } from 'react'


export default function useSeo({ title, description }) {

    const prevTitle = useRef(document.title);
    const prevDescription =useRef(document.querySelector('meta[name="description"]').getAttribute('content'))

    useEffect(() => {
       const previousTitle = prevTitle.current
       
       if(title) {
        document.title  = `${title} | Gifú`
       }

       return () => document.title = previousTitle

    }, [title])

    useEffect(() => {
        const metaDescription = document.querySelector('meta[name="description"]')
        const previouDescription = prevDescription.current
       
       if(description) {
        metaDescription.setAttribute("content", description)
       }

       return () => metaDescription.setAttribute("content", previouDescription)

    }, [description])
}

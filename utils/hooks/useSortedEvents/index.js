import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json()).then(data => {
    return data.sort((a, b) => {
        const dateA = new Date(a.startTime);
        const dateB = new Date(b.startTime);

        return dateA - dateB
    })
})

export default function useSortedEvents() {
    const { data, error } = useSWR('/api/events', fetcher)

    return {
        events: data,
        isLoading: !error && !data,
        isError: error
    }
}

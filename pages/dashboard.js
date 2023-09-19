import { useState } from "react"
import { bookStore } from "@/data/book"

export default function Dashboard() {
    const [data, setData] = useState()

    const addingData = () => {
        console.log('started')
        setData(bookStore)
    }
    return (
        <>
            welcome to the dashboard
            <button onClick={() => addingData()}>show data</button>
            {
                data && data.books.map((b, index) => {
                    if (b.category.toLowerCase() == "java") {
                        return (
                            <div key={index}>
                                <h1>{b.title}</h1>
                                {
                                    b.authors && b.authors.map((a, ind) => {
                                        return (
                                            <div key={ind}>
                                                {a}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                })
            }
        </>
    )
}
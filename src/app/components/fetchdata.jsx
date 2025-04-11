"use client"
import React, { useState, useEffect } from "react"

export default function fetchdata() {
    const [movies, setMovies] = useState([])

    const getMovie = async () => {
        try {
            const res = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=393be4d0d2ac40752e7498d76b476fef&language=en-US&page=1")
            const json = await res.json()
            setMovies(json.results || []) // Ensure results exist
            console.log(json.results)
        } catch (error) {
            console.error("Error fetching movies:", error)
        }
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div>
            <h1>Trending Movies</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    )
}

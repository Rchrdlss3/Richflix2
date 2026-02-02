import { jikanAPIUrl } from "./constants"

export const getAllAnime = async () => {
    try {
        const resp = await fetch(jikanAPIUrl)
        const data = resp.json()
        return data
    } catch (e) {
        console.log(e)
    }
};

export const getTopAnime = async () => {
    try {
        const resp = await fetch(`${jikanAPIUrl}/top/anime`)
        const data = resp.json()
        return data
    } catch (e) {
        console.log(e)
    }
};

export const getAnimeCharacters = async (animeId) => {
    try {
        const resp = await fetch(`${jikanAPIUrl}/anime/${animeId}/characters`)
        const data = resp.json()
        return data
    } catch (e) {
        console.log(e)
    }
}

export const getAnimeVideos = async (animeId) => {
    try {
        const resp = await fetch(`${jikanAPIUrl}/anime/${animeId}/videos`)
        const data = resp.json()
        return data
    } catch (e) {
        console.log(e)
    }
}

export const getAnimePictures = async (animeId) => {
    try {
        const resp = await fetch(`${jikanAPIUrl}/anime/${animeId}/pictures`)
        const data = resp.json()
        return data
    } catch (e) {
        console.log(e)
    }
}

export const getAnimeGenres = async () => {
    try {
        const resp = await fetch(`${jikanAPIUrl}/genres/anime`)
        const data = resp.json()
        return data
    } catch (e) {
        console.log(e)
    }
}

export const searchAnime = async (query) => {
    try {
        const resp = await fetch(`${jikanAPIUrl}/anime?q=${query}`)
        const data = resp.json()
        return data
    } catch (e) {
        console.log(e)
    }
}
export const dataApi = async () => {
    const data = await fetch("https://api.gameofthronesquotes.xyz/v1/random").then(response => response.json())
    return data
}
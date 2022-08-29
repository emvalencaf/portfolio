export async function createFetch(url){

    const handleError = (response) => {

        if(!response.ok) throw Error(`Error ${response.status} - ${response.statusText}`)

        return response
    }

    return await fetch(url)

        .then(response => handleError(response))

        .then(response => response.json())
        
}
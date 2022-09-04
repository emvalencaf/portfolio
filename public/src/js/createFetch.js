export async function createFetch(url, method = "GET", body = null){

    const handleError = (response) => {

        if(!response.ok) throw Error(`Error ${response.status} - ${response.statusText}`)

        return response
    }

    console.log(body)

    return await fetch(url, {
        method,
        body,
        headers:{
            "content-type": "application/json;charset=UTF-8"
        }
    })

        .then(response => handleError(response))

        .then(response => response.json())
        
}
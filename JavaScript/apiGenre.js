export async function getGenre() {
    fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: ''
    })
    }
    )
}
const formRegister = document.getElementById('formBuscador')

formRegister.addEventListener('submit', async event => {
    event.preventDefault()

    const response = await fetch('', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        // @ts-ignore
        body: new URLSearchParams(new FormData(formRegister))
    })

    if (response.status === 200) {
        const { payload: registro } = await response.json()
        console.log(registro)
    } else {
        const error = await response.json()
        alert(error.message)
    }
})
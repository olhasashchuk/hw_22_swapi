async function getData() {
    const elementData = document.querySelector('.js--input').value.split('/', 2);
    const controllerData = elementData[0].trim();
    const idData = elementData[1].trim();
    const response = await fetch(`https://swapi.dev/api/${controllerData}/${idData}/`, {
        method: 'GET'
    });

    const data = await response.json();
    console.log(data);
    document.querySelector('pre').innerHTML = JSON.stringify(data, null, 2);

    document.querySelector('.controller-item').innerText = `${controllerData}`;
    document.querySelector('.id-item').innerText = `${idData}`;
}

function showSpinner() {
    const spinner = document.querySelector('.js--spinner');
    spinner.style.display = 'block';
}

function hideSpinner() {
    const spinner = document.querySelector('.js--spinner');
    spinner.style.display = 'none';
}

document.querySelector('button').addEventListener('click', async () => {
    showSpinner();
    try {
        await getData();
    } finally {
        hideSpinner();
    }
});


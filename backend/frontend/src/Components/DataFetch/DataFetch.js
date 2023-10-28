const generateUrl = (type, id) => {
    let url = 'http://127.0.0.1:8000/api/dandaprojects/';
    switch (type) {
        case 'initial':
            return url;
        case 'project':
            return url+=`${id}`;
        case 'photos':
            return url+=`${id}/projectphotos/`;
        default:
            throw new Error(`Invalid type: ${type}`);
    }
}


const dataFetch = async (type, id) => {

    const fetch = require('node-fetch');
    
    const url = generateUrl(type, id); 

    console.log(`url - ${url}`)

    return await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())
    .then(data => {
        const results = data;
            return results;
    })
    .catch(err => console.error('error:' + err));

}

export {dataFetch};
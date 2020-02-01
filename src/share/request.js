import * as constants from './constants';
export function request(url, method, body) {
    return (
        fetch(constants.rootURL + url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(err => 'JSON server is not running! Please typig into terminal of folder "db" json-server -p 4100 -w db.json!')
    )
} 
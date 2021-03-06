import {SessionEntry, submissionData, LoginCredentials} from "./interfaces";
import {specificSessionOutput} from "./interfaces";
let cc = console.log;

export function loginQuery(data: LoginCredentials) {
    /*let entry: object = {
        "password": "abc",
        "username": "elseif",
    };*/

    fetch("http://localhost:80/php/login.php", {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        credentials: "include",
        headers: {
            'Content-Type': 'application/json' }
    }).then(response => response.json())
        .then(data => cc(data));
}

export async function loginV2(){
    let entry: object = {
        "password": "abc",
        "username": "elseif",
    };

    const response = await fetch("http://localhost:80/php/login.php", {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(entry),
        credentials: "include",
        headers: {
            'Content-Type': 'application/json' }
    });

    const responseJSON = await response.json();

    return responseJSON;
}

export async function submitSession(entries: SessionEntry) {
    let response = await fetch("http://localhost:80/php/sessionentry.php", {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(entries),
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return await response.json();
}

export async function getExercises(){
    let response = await fetch("http://localhost:80/php/getexercises.php", {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let responseJSON = await response.json();

    return responseJSON;
}

export async function deleteExercise(exercise: string){
    let response = await fetch("http://localhost:80/php/exercisedelete.php", {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(exercise),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let responseJSON = await response.json();

    return responseJSON;
}

export async function getRecentSessions(){
    const response = await fetch("http://localhost:80/php/getrecentsessions.php", {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const responseJSON = await response.json();

    return responseJSON;
}

export async function getSpecificSession(sessionDate: string, sessionTitle: string){
    let titleAndDate: specificSessionOutput = {
        title: sessionTitle,
        date: sessionDate
    }

    const response = await fetch("http://localhost:80/php/getspecificsession.php", {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(titleAndDate),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const dataToBeReturned = await response.json();

    return dataToBeReturned;
}

export async function getAllSessions(){
    const response = await fetch("http://localhost:80/php/getallsessions.php", {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const dataToBeReturned = await response.json();

    return dataToBeReturned;
}

export async function logout(){
    const response = await fetch("http://localhost:80/php/logout.php", {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const dataToBeReturned = await response.json();

    return dataToBeReturned;
}

export async function queryCheckLogin(){
    const response = await fetch("http://localhost:80/php/checkLogin.php", {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const dataToBeReturned = await response.json();

    return dataToBeReturned;
}
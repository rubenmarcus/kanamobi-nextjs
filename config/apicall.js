import fetch from "isomorphic-unfetch";

export function apiCall(Call){
    return  fetch(Call);
}

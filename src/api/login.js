import http from "../util/http";
import {JSEncrypt} from "jsencrypt";

export default function login(params) {
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(localStorage.publicKey);
    let password = encrypt.encrypt(params.password).replace(/\+/g,' ');
    return http.post("/api/login", JSON.stringify({email: params.email, password}));
}
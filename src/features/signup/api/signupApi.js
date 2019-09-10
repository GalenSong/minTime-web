import http from "util/http";
import {JSEncrypt} from "jsencrypt";

export default function signUp(params) {
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(localStorage.publicKey);
    let password = encrypt.encrypt(params.password).replace(/\+/g,' ');
    return http.post("/api/signup", JSON.stringify({email: params.email, password}));
}
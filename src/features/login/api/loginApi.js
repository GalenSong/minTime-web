import http from "@utils/http";
import {JSEncrypt} from "jsencrypt";

export default function login(params) {
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(localStorage.publicKey);
    let password = encrypt.encrypt(params.password);
    return http.post("/api/login", JSON.stringify({email: params.email, password}));
}
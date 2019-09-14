import http from "@utils/http";
import {JSEncrypt} from "jsencrypt";

export default function register(params) {
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(localStorage.publicKey);
    let password = encrypt.encrypt(params.password);
    return http.post("/api/register", JSON.stringify({email: params.email, password}));
}
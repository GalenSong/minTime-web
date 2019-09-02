import http from "../util/http";

export default function getPublicKey(params) {
    return http.get("/api/getPublicKey");
}
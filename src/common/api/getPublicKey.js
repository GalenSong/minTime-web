import http from "@utils/http";

export default function getPublicKey(params) {
    return http.get("/api/getPublicKey");
}
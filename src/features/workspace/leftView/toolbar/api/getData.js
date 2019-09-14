import http from "@utils/http";

export default function getData(params) {
    return http.get("/api/getData");
}
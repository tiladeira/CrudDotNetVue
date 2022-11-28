import http from "../http-common";

class ScheduleService {
    getAll() {
      return http.get("/Schedule");
    }
  
    get(id) {
      return http.get(`/Schedule/${id}`);
    }
  
    create(data) {
      return http.post("/Schedule", data);
    }
  
    update(id, data) {
      return http.put(`/Schedule/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/Schedule/${id}`);
    }
  }
  
  export default new ScheduleService();
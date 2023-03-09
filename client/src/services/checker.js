import http from "../http";

class CheckerDataServices {
  createArticle(data) {
    return http.post('/article', data);
  }

  getAllArticles() {
    return http.get('/')
  }

  getAnArticle(id) {
    return http.get(`page=${id}`);
  }

  updateArticle(id, data) {
    return http.put(`/article?id=${id}`, data);
  }

  deleteArticle(id) {
    return http.delete(`/article?id=${id}`)
  }
}

const checkerDataServices = new CheckerDataServices();
export default checkerDataServices;

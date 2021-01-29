import axios from "axios";

const ListAPI = {
  getLists: function () {
    return axios
      .get("/api/user/userLists")
      .then((res) => res.data)
      .catch((err) => {
        if (err.response.status === 401) {
          return { message: "Not Signed In", error: true };
        }
      });
  },
  getListById: function(id) {
    return axios
        .get("/api/list/lists/" + id)
        .then(res => res.data)
        .catch((err) => {
            if (err.response.status === 401) {
                return { message: "Not Signed In", error: true };
            }
        });
  },
  deleteList: function (id) {
    return axios
        .delete("/api/list/lists/" + id)
        .then(res => res.data)
        .catch((err) => {
            if (err.response.status === 401) {
                return { message: "Not Signed In", error: true };
            }
        });
  },
  createList: function (list) {
    return axios
      .post("/api/list/lists", list)
      .then((res) => res.data)
      .catch((err) => {
        if (err.response.status === 401) {
          return { message: "Not Signed In", error: true };
        }
      });
  }
};

export default ListAPI;
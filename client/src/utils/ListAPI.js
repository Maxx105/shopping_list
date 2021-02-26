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
  },
  // updateById: function (item) {
  //   return axios
  //       .put("/api/list/lists", item)
  //       .then(res => res.data)
  //       .catch(err => console.log(err.response))
  // },
  createListItem: function (listItem) {
      return axios
        .post("/api/list/items", listItem)
        .then((res) => res.data)
        .catch((err) => {
            if (err.response.status === 401) {
            return { message: "Not Signed In", error: true };
            }
        });
  },
  deleteListItem: function (id) {
    return axios
        .delete("/api/list/items/" + id)
        .then(res => res.data)
        .catch((err) => {
            if (err.response.status === 401) {
                return { message: "Not Signed In", error: true };
            }
        });
  },
  updateStyle: function (style) {
    return axios
      .put("/api/list/items", style)
      .then(res => res.data)
      .catch((err) => {
          if (err.response.status === 401) {
              return { message: "Not Signed In", error: true };
          }
      });
  }

};

export default ListAPI;
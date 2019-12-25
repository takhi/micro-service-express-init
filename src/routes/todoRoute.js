const { Router } = require("express");
const router = Router();

const todoHandler = require("../handlers/todoHandler");

function todoRoute() {
  router.post("/todo", todoHandler.addTodo);
  router.get("/todos", todoHandler.getTodos)
  router.get("/todo/:user", todoHandler.getTodo)
  router.put("/todo/:id", todoHandler.editTodo)
  return router;
}

module.exports = todoRoute;
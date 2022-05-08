package com.app.crudfullstack.Controllers;

import com.app.crudfullstack.Models.TodoModel;
import com.app.crudfullstack.Services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping(path = "api/todos")
    public List<TodoModel> getAllTodo() {
        return todoService.getAllTodo();
    }
    @GetMapping(path = "api/todos/{id}")
    public Optional<TodoModel> getTodo(@PathVariable(value = "id") Long id) {
        return todoService.getTodo(id);
    }
    @PostMapping(path = "api/todos")
    public TodoModel createTodo(@RequestBody TodoModel todo) {
        return todoService.createTodo(todo);
    }
    @PutMapping(path = "api/todos/{id}")
    public TodoModel updateTodo(@PathVariable(value = "id") Long id, @RequestBody TodoModel todo) {
        Optional<TodoModel> foundTodo = todoService.getTodo(id);
        foundTodo.get().setName(todo.getName());
        foundTodo.get().setCompleted(todo.getCompleted());
        return todoService.updateTodo(foundTodo.get());
    }
    @DeleteMapping(path = "api/todos/{id}")
    public String deleteTodo(@PathVariable(value = "id") Long id) {
        boolean ok = todoService.deleteTodo(id);
        if (ok) {
            return "To-do list was removed";
        } else {
            return "To-do list was not found";
        }
    }
    @DeleteMapping(path = "api/todos")
    public String deleteAllTodo() {
        return todoService.deleteAllTodo();
    }
}

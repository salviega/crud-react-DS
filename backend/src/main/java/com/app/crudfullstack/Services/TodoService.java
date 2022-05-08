package com.app.crudfullstack.Services;

import com.app.crudfullstack.Models.TodoModel;
import com.app.crudfullstack.Repositories.ITodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    private ITodoRepository todoRepository;

    public List<TodoModel> getAllTodo() {
        return todoRepository.findAll();
    }
    public Optional<TodoModel> getTodo(Long id) {
        return todoRepository.findById(id);
    }
    public TodoModel createTodo(TodoModel todo) {
        return todoRepository.save(todo);
    }
    public TodoModel updateTodo(TodoModel todo) {
        return  todoRepository.save(todo);
    }
    public boolean deleteTodo(Long id) {
        try {
            todoRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    public String deleteAllTodo() {
        todoRepository.deleteAll();
        return "All To-do list was eliminated";
    }
}

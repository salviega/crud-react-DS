package com.app.crudfullstack.Repositories;

import com.app.crudfullstack.Models.TodoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITodoRepository extends JpaRepository<TodoModel, Long> {
}

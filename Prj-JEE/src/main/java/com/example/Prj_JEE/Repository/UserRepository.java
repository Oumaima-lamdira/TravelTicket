package com.example.Prj_JEE.Repository;

import com.example.Prj_JEE.Entities.user;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<user, Long> {
    user findByemail(String email);


}

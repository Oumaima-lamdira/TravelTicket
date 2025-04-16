package com.example.Prj_JEE.Web;



import com.example.Prj_JEE.Entities.user;
import com.example.Prj_JEE.Repository.UserRepository;
import com.example.Prj_JEE.Service.AuthService;
import com.example.Prj_JEE.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody user user) {
        if (authService.authenticate(user.getEmail(), user.getMotDePasse())) {
            return ResponseEntity.ok(Collections.singletonMap("message", "Login successful"));
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    @PostMapping("/addUser")
    public ResponseEntity<String> addUser(@RequestBody user user) {
        userService.addUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User added successfully");
    }
}


package com.example.Prj_JEE.Service;



import com.example.Prj_JEE.Entities.user;
import com.example.Prj_JEE.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
public class AuthService {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public boolean authenticate(String email, String motpasse) {
        user user = userRepository.findByemail(email);
        if (user != null && passwordEncoder.matches(motpasse, user.getMotDePasse())) {
            return true;
        }
        return false;
    }
}


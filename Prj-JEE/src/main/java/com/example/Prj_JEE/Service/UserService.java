package com.example.Prj_JEE.Service;

import com.example.Prj_JEE.Entities.user;
import com.example.Prj_JEE.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.logging.Logger;
@Service
public class UserService {
    private static final Logger logger = Logger.getLogger(UserService.class.getName());

    @Autowired
    private UserRepository userRepository;
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        logger.info("Trying to load user by username: " + username);
        user user = userRepository.findByemail(username);
        if (user == null) {
            logger.warning("User not found: " + username);
            throw new UsernameNotFoundException("User not found");
        }
        logger.info("User found: " + username);
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getMotDePasse(),
                Collections.emptyList()
        );
    }
    @Autowired
    private PasswordEncoder passwordEncoder;
    public  user addUser(user user) {
        user.setMotDePasse(passwordEncoder.encode(user.getMotDePasse()));
        return userRepository.save(user);
    }
}
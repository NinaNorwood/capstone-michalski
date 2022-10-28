package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User addNames(User userName) {
        User userNames = User.builder()
                .userName1(userName.getUserName1())
                .userName2(userName.getUserName2())
                .build();
        return userRepository.save(userNames);
    }
}

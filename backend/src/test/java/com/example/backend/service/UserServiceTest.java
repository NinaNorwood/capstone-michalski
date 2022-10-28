package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserServiceTest {

    UserRepository userRepository = mock(UserRepository.class);
    UserService userService = new UserService(userRepository);

    @Test
    void addName() {
        //GIVEN
        User user1 = new User("1","Klaus");
        when(userRepository.save(user1)).thenReturn(user1);

        //WHEN
        User actual = userService.addName(user1);

        //THEN
        verify(userRepository).save(user1);
        assertEquals(actual, user1);
    }
}
package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @DirtiesContext
    @Test
    void addName() throws Exception {
        //GIVEN
        userRepository.save(new User("Klaus", "Lisa"));

        String expectedJson = """
                {
                "userName1":"Klaus",
                "userName2":"Lisa"
                }
                """;

        //WHEN&THEN
        mockMvc.perform(post("/user")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .content("""
                        {"userName1":"Klaus", "userName2":"Lisa"}
                        """))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJson));
    }
}
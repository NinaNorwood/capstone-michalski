package com.example.backend.controller;

import com.example.backend.model.Question;
import com.example.backend.repository.QuestionRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class QuestionControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private QuestionRepository questionRepository;

    @DirtiesContext
    @Test
    void getAllQuestions() throws Exception {
        //GIVEN
        Question testQuestion = new Question("123", "Funny", "What does happiness means to you?");
        questionRepository.save(testQuestion);

        //WHEN&THEN
        mockMvc.perform(
                MockMvcRequestBuilders.get("/api/question"))
                .andExpect(status().is(200))
                .andExpect(MockMvcResultMatchers.content().string("""
                        [{"id":"123","category":"Funny","questionText":"What does happiness means to you?"}]"""));
    }
}
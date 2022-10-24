package com.example.backend.service;

import com.example.backend.model.Question;
import com.example.backend.repository.QuestionRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class QuestionServiceTest {

    private final QuestionRepository questionRepository = mock(QuestionRepository.class);

    private final QuestionService questionService = new QuestionService(questionRepository);

    @Test
    void getAllQuestions() {
        //GIVEN
        when(questionRepository.findAll()).thenReturn(
                List.of(new Question("123", "Funny", "What does happiness means to you?"),
                        new Question("456", "Standard", "Who is the one person you can talk to about anything?")));
        //WHEN
        List<Question> actual = questionService.getAllQuestions();
        //THEN
        List<Question> expected = List.of(
                new Question("123", "Funny", "What does happiness means to you?"),
                new Question("456", "Standard", "Who is the one person you can talk to about anything?"));

        verify(questionRepository).findAll();
        assertEquals(actual, expected);

    }
}
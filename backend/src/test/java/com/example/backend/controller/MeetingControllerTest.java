package com.example.backend.controller;

import com.example.backend.model.Meeting;
import com.example.backend.repository.MeetingRepository;
import com.example.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class MeetingControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private MeetingRepository meetingRepository;

    @MockBean
    private IdService idService;

    @DirtiesContext
    @Test
    void getAllMeetings_shouldReturn_listOfMeetings() throws Exception {
        //GIVEN
        Meeting testMeeting = new Meeting("123","","","","","");
        meetingRepository.save(testMeeting);
        //WHEN&THEN
        mockMvc.perform(MockMvcRequestBuilders.get("/api/meetings"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("""
                        [{"meetingId":"123","meetingLocation":"","meetingDate":"","meetingTime":"","userEmail1":"","userEmail2":""}]"""
                ));
    }

    @DirtiesContext
    @Test
    void addMeeting_shouldReturn_newMeeting() throws Exception {
        //GIVEN
        when(idService.generateID()).thenReturn("123");
        meetingRepository.save(new Meeting("123","","","","",""));

        String expectedJson = """
                {
                "meetingId":"123",
                "meetingLocation":null,
                "meetingDate":null,
                "meetingTime":null,
                "userEmail1":"",
                "userEmail2":null
                }
                """;

        //WHEN&THEN
        mockMvc.perform(post("/api/meetings/add")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .content("""
                        {"userEmail1":""}
                        """))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJson));
    }
}
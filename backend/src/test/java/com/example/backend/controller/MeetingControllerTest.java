package com.example.backend.controller;

import com.example.backend.model.Meeting;
import com.example.backend.repository.MeetingRepository;
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
class MeetingControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private MeetingRepository meetingRepository;

    @DirtiesContext
    @Test
    void getAllMeetings() throws Exception {
        //GIVEN
        Meeting testMeeting = new Meeting("","","","","","");
        meetingRepository.save(testMeeting);
        //WHEN&THEN
        mockMvc.perform(MockMvcRequestBuilders.get("/api/meetings"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("""
                        [{"meetingId":"","meetingLocation":"","meetingDate":"","meetingTime":"","userEmail1":"","userEmail2":""}]"""
                ));
    }
}
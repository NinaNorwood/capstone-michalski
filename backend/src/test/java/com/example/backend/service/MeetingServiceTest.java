package com.example.backend.service;

import com.example.backend.model.Meeting;
import com.example.backend.repository.MeetingRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class MeetingServiceTest {

    private final MeetingRepository meetingRepository = mock(MeetingRepository.class);
    private final MeetingService meetingService = new MeetingService(meetingRepository);

    @Test
    void getAllMeetings() {
        //GIVEN
        when(meetingRepository.findAll()).thenReturn(
                List.of(new Meeting("","","","","",""),
                        new Meeting("","","","","","")));
        //WHEN
        List<Meeting> actual = meetingService.getAllMeetings();
        //THEN
        List<Meeting> expected = List.of(new Meeting("","","","","",""),
                new Meeting("","","","","",""));

        verify(meetingRepository).findAll();
        assertEquals(actual, expected);
    }
}
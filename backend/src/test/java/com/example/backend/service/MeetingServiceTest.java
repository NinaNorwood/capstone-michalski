package com.example.backend.service;

import com.example.backend.model.Meeting;
import com.example.backend.model.MeetingDTO;
import com.example.backend.repository.MeetingRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class MeetingServiceTest {

    private final MeetingRepository meetingRepository = mock(MeetingRepository.class);
    private final IdService idService = mock(IdService.class);
    private final MeetingService meetingService = new MeetingService(meetingRepository, idService);

    @Test
    void getAllMeetings_shouldReturn_listOfMeetings() {
        //GIVEN
        when(meetingRepository.findAll()).thenReturn(
                List.of(new Meeting("123","","","","",""),
                        new Meeting("456","","","","","")));
        //WHEN
        List<Meeting> actual = meetingService.getAllMeetings();
        //THEN
        List<Meeting> expected = List.of(new Meeting("123","","","","",""),
                new Meeting("456","","","","",""));

        verify(meetingRepository).findAll();
        assertEquals(actual, expected);
    }

    @Test
    void addMeeting_shouldReturn_newMeeting(){
        //GIVEN
        MeetingDTO meetingDTO = new MeetingDTO("","","","","");
        Meeting expected = new Meeting("123","","","","","");
        when(idService.generateID()).thenReturn("123");
        when(meetingRepository.save(any())).thenReturn(
                Meeting.builder()
                        .meetingId("123")
                        .meetingDate(meetingDTO.getMeetingDate())
                        .meetingTime(meetingDTO.getMeetingTime())
                        .meetingLocation(meetingDTO.getMeetingLocation())
                        .userEmail1(meetingDTO.getUserEmail1())
                        .userEmail2(meetingDTO.getUserEmail2())
                        .build());

        //WHEN
        Meeting actual = meetingService.addMeeting(meetingDTO);

        //THEN
        assertEquals(actual, expected);
    }
}
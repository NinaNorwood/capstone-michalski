package com.example.backend.service;

import com.example.backend.model.Meeting;
import com.example.backend.model.MeetingDTO;
import com.example.backend.repository.MeetingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MeetingService {

    private final MeetingRepository meetingRepository;
    private final IdService idService;

    public MeetingService(MeetingRepository meetingRepository, IdService idService) {
        this.meetingRepository = meetingRepository;
        this.idService = idService;
    }

    public List<Meeting> getAllMeetings() {
        return meetingRepository.findAll();
    }

    public Meeting addMeeting(MeetingDTO meeting) {
        Meeting newMeeting = Meeting.builder()
                .meetingId(idService.generateID())
                .meetingDate(meeting.getMeetingDate())
                .meetingTime(meeting.getMeetingTime())
                .meetingLocation(meeting.getMeetingLocation())
                .userEmail1(meeting.getUserEmail1())
                .userEmail2(meeting.getUserEmail2())
                .build();
        return meetingRepository.save(newMeeting);
    }
}

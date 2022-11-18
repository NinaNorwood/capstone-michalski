package com.example.backend.service;

import com.example.backend.model.Meeting;
import com.example.backend.repository.MeetingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MeetingService {

    private final MeetingRepository meetingRepository;

    public MeetingService(MeetingRepository meetingRepository) {
        this.meetingRepository = meetingRepository;
    }

    public List<Meeting> getAllMeetings() {
        return meetingRepository.findAll();
    }
}

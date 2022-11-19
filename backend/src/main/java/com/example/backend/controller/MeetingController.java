package com.example.backend.controller;


import com.example.backend.model.Meeting;
import com.example.backend.model.MeetingDTO;
import com.example.backend.service.MeetingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/meetings")
public class MeetingController {

    private final MeetingService meetingService;

    public MeetingController(MeetingService meetingService) {
        this.meetingService = meetingService;
    }

    @GetMapping
    public List<Meeting> getAllMeetings(){
        return meetingService.getAllMeetings();
    }

    @PostMapping("/add")
    public Meeting addMeeting(@RequestBody MeetingDTO meetingDTO){
        return meetingService.addMeeting(meetingDTO);
    }
}

package com.example.backend.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document("meeting")
public class Meeting {

    @Id
    private String meetingId;
    private String meetingLocation;
    private String meetingDate;
    private String meetingTime;
    private String userEmail1;
    private String userEmail2;
}

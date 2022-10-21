package com.example.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//DELETE LATER ON! ONLY FOR TEST PURPOSE
@RestController
@RequestMapping
public class HelloWorldController {

    @GetMapping("/api/hello")
    public String sayHello() {
        return "Hello World";

    }


}

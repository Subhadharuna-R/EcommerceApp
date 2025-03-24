package com.example.ecommerce.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ecommerce.model.Chatbot;
import com.example.ecommerce.repository.ChatbotRepository;

@Service
public class ChatbotService {

    @Autowired
    private ChatbotRepository chatbotRepository;

    public String getResponse(String message) {
        Optional<Chatbot> chatbot = chatbotRepository.findByQuestion(message);
        return chatbot.map(Chatbot::getAnswer).orElse("I'm not sure how to respond to that. Can you rephrase?");
    }
}
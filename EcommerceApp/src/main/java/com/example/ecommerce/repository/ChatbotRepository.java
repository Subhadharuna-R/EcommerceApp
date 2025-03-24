package com.example.ecommerce.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ecommerce.model.Chatbot;

@Repository
public interface ChatbotRepository extends JpaRepository<Chatbot, Long> {

    // Custom query method to find chatbot response by question
    Optional<Chatbot> findByQuestion(String question);
}

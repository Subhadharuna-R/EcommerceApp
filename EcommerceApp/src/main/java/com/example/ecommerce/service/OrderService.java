package com.example.ecommerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.ecommerce.model.Order;
import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.OrderRepository;
import com.example.ecommerce.repository.UserRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<String> placeOrder(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            Order order = new Order();
            order.setUser(user.get());
            orderRepository.save(order);
            return ResponseEntity.ok("Order placed successfully");
        }
        return ResponseEntity.badRequest().body("User not found");
    }

    public List<Order> getOrdersByUser(Long userId) {
        return orderRepository.findByUserId(userId);
    }

	public List<Order> getOrderHistory(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}
}

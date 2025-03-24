package com.example.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ecommerce.model.Cart;
import com.example.ecommerce.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/add/{userId}/{productId}")
    public ResponseEntity<String> addToCart(@PathVariable Long userId, @PathVariable Long productId) {
        return cartService.addToCart(userId, productId);
    }

    @GetMapping("/view/{userId}")
    public Cart viewCart(@PathVariable Long userId) {
        return cartService.viewCart(userId);
    }

    @DeleteMapping("/remove/{userId}/{productId}")
    public ResponseEntity<String> removeFromCart(@PathVariable Long userId, @PathVariable Long productId) {
        return cartService.removeFromCart(userId, productId);
    }
}

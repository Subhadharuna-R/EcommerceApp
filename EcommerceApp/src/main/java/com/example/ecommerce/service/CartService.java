package com.example.ecommerce.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.ecommerce.model.Cart;
import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.CartRepository;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public Optional<Cart> getCartByUser(User user) {
        return cartRepository.findByUser(user);
    }

    public Cart saveCart(Cart cart) {
        return cartRepository.save(cart);
    }

    public void clearCart(Long cartId) {
        cartRepository.deleteById(cartId);
    }

	public ResponseEntity<String> addToCart(Long userId, Long productId) {
		// TODO Auto-generated method stub
		return null;
	}

	public Cart viewCart(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}

	public ResponseEntity<String> removeFromCart(Long userId, Long productId) {
		// TODO Auto-generated method stub
		return null;
	}
}

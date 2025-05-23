package com.projeto.maicosoft.controllers;

import com.projeto.maicosoft.security.LoginDto;
import com.projeto.maicosoft.security.JwtUtil;
import com.projeto.maicosoft.security.UsuarioDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UsuarioDetailsService usuarioDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> autenticar(@RequestBody LoginDto loginDto) {
        var authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword()));

        UserDetails userDetails = usuarioDetailsService.loadUserByUsername(loginDto.getUsername());
        String token = jwtUtil.gerarToken(userDetails.getUsername());

        return ResponseEntity.ok(Map.of("token", token));
    }

    @GetMapping("/me")
    public ResponseEntity<?> getUsuarioAtual(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok("Usuário logado: " + userDetails.getUsername());
    }
}

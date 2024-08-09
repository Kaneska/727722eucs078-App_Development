package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Models.Register;
import com.example.demo.Repository.AccountRepository;

@Service
public class RegisterService {

    @Autowired
    private AccountRepository accountRepository;

    public Register registerAccount(Register register) {
        return accountRepository.save(register);
    }
}

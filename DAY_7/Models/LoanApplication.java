package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class LoanApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String dob;
    private String email;
    private String mobileNumber;
    private String gender;
    private String occupation;
    private String idType;
    private String idNumber;
    private String issueAuthority;
    private String issuedState;
    private String issuedDate;
    private String expiryDate;
    private String addressType;
    private String nationality;
    private String state;
    private String district;
    private String blockNumber;
    private String wardNumber;
    private String fatherName;
    private String motherName;
    private String grandfatherName;
    private String spouseName;
    private Integer numberOfSiblings;
    private Integer numberOfKids;

    // Getters and setters for all fields

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Other getters and setters
}

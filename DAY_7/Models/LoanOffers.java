package com.example.demo.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class LoanOffers {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private UUID farmerId;
    private double loanAmount;
    private double interestRate;
    private int repaymentTerm; // in months

    @Enumerated(EnumType.STRING)
    private LoanStatus status;

    private LocalDateTime offerDate;
    private LocalDateTime acceptanceDate;

    @PrePersist
    protected void onCreate() {
        offerDate = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        // Update any necessary fields on update
    }

    public enum LoanStatus {
        OFFERED,
        ACCEPTED,
        REJECTED,
        EXPIRED
    }
}

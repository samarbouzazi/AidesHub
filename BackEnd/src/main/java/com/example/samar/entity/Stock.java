package com.example.samar.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Stock implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name="idStock")
    private Integer idStock;
    private String lieu;
    @ManyToMany()
    @JsonIgnore
    private Set<Aides> aide;

}

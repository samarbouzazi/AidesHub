package com.example.samar.repository;

import com.example.samar.entity.Aides;
import com.example.samar.entity.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AidesRepository  extends JpaRepository<Aides,Integer> {

    @Query("SELECT aides from Aides aides" +
            " GROUP BY (aides.idAide)" +
            "ORDER BY (aides.nom) ASC")
    List<Aides> triaides();

}

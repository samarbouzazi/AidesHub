package com.example.samar.repository;

import com.example.samar.entity.Aides;
import com.example.samar.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StockRepository  extends JpaRepository<Stock,Integer> {

    @Query("SELECT stock from Stock stock" +
            " GROUP BY (stock.idStock)" +
            "ORDER BY (stock.lieu) ASC")
    List<Stock> triStock();

    @Query("SELECT s FROM Stock s  WHERE s.lieu=?1")
    List<Stock> getStock(String lieu);
}

package com.example.samar.Service;

import com.example.samar.entity.Aides;
import com.example.samar.entity.Stock;

import java.util.List;

public interface IStock {

    List<Stock> retrieveAllStock();

    Stock addStock(Stock s);

    void deleteStock(Integer idStock);

    Stock updateStock(Stock s);

    Stock retrieveStock(Integer idStock);
     void assignAideToStock(int idAide, int idStock);

    List<Stock> triStock();
    List<Stock> getStockByLieu(String lieu);
}

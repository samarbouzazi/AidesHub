package com.example.samar.Service;


import com.example.samar.entity.Aides;
import com.example.samar.entity.Stock;
import com.example.samar.repository.AidesRepository;
import com.example.samar.repository.StockRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class StockService implements IStock {

  StockRepository stockRepository;
  AidesRepository aidesRepository;
    @Override
    public List<Stock> retrieveAllStock() {
        return stockRepository.findAll();
    }

    @Override
    public Stock addStock(Stock s) {
        return stockRepository.save(s);
    }

    @Override
    public void deleteStock(Integer idStock) {
          stockRepository.deleteById(idStock);
    }

    @Override
    public Stock updateStock(Stock s) {
      return stockRepository.save(s);
    }

    @Override
    public Stock retrieveStock(Integer idStock) {
      return stockRepository.findById(idStock).orElse(null);
    }

  @Override
  public void assignAideToStock(int idAide, int idStock){
    Aides aides = aidesRepository.findById(idAide).orElse(null);
    Stock stock = stockRepository.findById(idStock).orElse(null);
    stock.getAide().add(aides);
    stockRepository.save(stock);
  }

  @Override
  public   List<Stock> triStock(){
      return stockRepository.triStock();
  }

  @Override
  public List<Stock> getStockByLieu(String lieu) {
    return stockRepository.getStock(lieu);
  }

}

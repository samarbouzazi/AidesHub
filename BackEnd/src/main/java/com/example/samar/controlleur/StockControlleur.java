package com.example.samar.controlleur;


import com.example.samar.Service.IStock;
import com.example.samar.entity.Stock;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Tag(name="Stock")
@RequestMapping("Stock")

@CrossOrigin(origins = "http://localhost:4200")
public class StockControlleur {

    IStock iStock;
    @GetMapping("/Stock")
    List<Stock> retrieveAllStock(){
        return iStock.retrieveAllStock();
    }
    @PostMapping("/Stock")
    Stock addStock(@RequestBody Stock s){
        return iStock.addStock(s);
    }
    @DeleteMapping("/Stock/{idStock}")
    void deleteStock(@PathVariable  Integer idStock){
         iStock.deleteStock(idStock);
    }
    @PutMapping("/Stock")
    Stock updateStock(@RequestBody Stock s){
     return  iStock.updateStock(s);
    }
    @GetMapping("/Stock/{idStock}")
    Stock retrieveStock(@PathVariable Integer idStock){
        return iStock.retrieveStock(idStock);
    }
    @GetMapping("/Stock/{idAide}/{idStock}")
    public void assignAideToStock(@PathVariable int idAide,@PathVariable int idStock){
         iStock.assignAideToStock(idAide,idStock);
    }
    @GetMapping("/tristock")
    public   List<Stock> triStock(){
     return iStock.triStock();
    }
    @GetMapping("/rechercherbylieu/{lieu}")
    public List<Stock> getStockByLieu(String lieu){
        return iStock.getStockByLieu(lieu);
    }
}

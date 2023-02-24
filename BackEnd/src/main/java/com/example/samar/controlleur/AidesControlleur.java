package com.example.samar.controlleur;


import com.example.samar.Service.IAides;
import com.example.samar.entity.Aides;
import com.example.samar.entity.Type;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Tag(name="Aides")
@RequestMapping("Aides")
@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
public class AidesControlleur {

    IAides iAides;

    @GetMapping("/Aides")
    List<Aides> retrieveAllAides(){
    return iAides.retrieveAllAides();
}
    @PostMapping("/Aides")
    Aides addAides(@RequestBody Aides a){
    return iAides.addAides(a);
    }

    @DeleteMapping("/Aides/{idAide}")
    void deleteAides(@PathVariable  Integer idAide){
    iAides.deleteAides(idAide);
    }
    @PutMapping("/Aides")
    Aides updateAides(@RequestBody Aides a){
    return iAides.updateAides(a);
    }
    @GetMapping("/Aides/{idAide}")
    Aides retrieveAides(@PathVariable Integer idAide){
    return iAides.retrieveAides(idAide);
    }
     @GetMapping("/tri")
    public List<Aides> triaide()
    {
        return iAides.triaide();
    }



}

package com.example.samar.Service;

import com.example.samar.entity.Aides;
import com.example.samar.entity.Type;
import com.example.samar.repository.AidesRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class AidesService implements IAides{
    AidesRepository aidesRepository;

    @Override
    public List<Aides> retrieveAllAides() {
        return aidesRepository.findAll() ;
    }

    @Override
    public Aides addAides(Aides a) {
        return aidesRepository.save(a);
    }

    @Override
    public void deleteAides(Integer idAide) {
           aidesRepository.deleteById(idAide);
    }

    @Override
    public Aides updateAides(Aides a) {
        return aidesRepository.save(a);
    }

    @Override
    public Aides retrieveAides(Integer idAide) {
        return aidesRepository.findById(idAide).orElse(null);
    }
    @Override
     public List<Aides> triaide(){
       return aidesRepository.triaides();
    }



}

package com.example.samar.Service;

import com.example.samar.entity.Aides;
import com.example.samar.entity.Type;

import java.util.List;

public interface IAides {

    List<Aides> retrieveAllAides();

    Aides addAides(Aides a);

    void deleteAides(Integer idAide);

    Aides updateAides(Aides a);

    Aides retrieveAides(Integer idAide);

    List<Aides> triaide();



}

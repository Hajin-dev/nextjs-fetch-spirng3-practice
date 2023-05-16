package xyz.hajin.practice;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.Getter;
@Getter
@Setter
@NoArgsConstructor
@Entity
public class InfoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) private Long id;

    private String name;
    private String email;
    //private InfoEntity() {}
    // public InfoEntity(String name,String email){
    //     this.name=name;
    //     this.email=email;
    // }
}

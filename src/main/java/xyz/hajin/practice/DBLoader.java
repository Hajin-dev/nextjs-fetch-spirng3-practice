package xyz.hajin.practice;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/info")
public class DBLoader  {
    private final InfoRepository infoRepository;
    DBLoader(InfoRepository infoRepository){
        this.infoRepository=infoRepository;
    }
    @GetMapping
    public List<InfoEntity> getInfoEntity(){
        return this.infoRepository.findAll();
    }
    @GetMapping("/{id}")
    public InfoEntity getInfoEntity(@PathVariable Long id){
        return this.infoRepository.findById(id).orElseThrow(RuntimeException::new);
    }
   /*  @GetMapping("/print")
    public ResponseEntity getEntity(){
        return ResponseEntity.created(new URI("/info/")).body("Hello World");

    } */
    @PostMapping
    public ResponseEntity<InfoEntity> createInfo(@RequestBody InfoEntity infoEntity) throws URISyntaxException{
            InfoEntity savedInfo = this.infoRepository.save(infoEntity);
            return ResponseEntity.created(new URI("/info/"+ savedInfo.getId())).body(savedInfo);
    }
    @PutMapping("/{id}")
    public ResponseEntity<InfoEntity> updateInfo(@PathVariable Long id, @RequestBody InfoEntity info){
        InfoEntity currentInfo = this.infoRepository.findById(id).orElseThrow(RuntimeException::new);
        currentInfo.setEmail(info.getEmail());
        currentInfo.setName(info.getName());
        currentInfo = this.infoRepository.save(info);
        return ResponseEntity.ok(currentInfo);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<InfoEntity> deleteInfo(@PathVariable Long id){
        this.infoRepository.deleteById(id);
        return ResponseEntity.ok().build();
        
    }
}

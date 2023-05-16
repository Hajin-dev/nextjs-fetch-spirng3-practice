package xyz.hajin.practice.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/info/**").
        allowedOrigins(
            "http://localhost:3000",
            "http://0.0.0.0:3000").
        allowedMethods("GET","POST","DELETE","PUT").
        maxAge(3000);
    }
}

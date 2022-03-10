package com.psgstellar.petbook.swagger;

import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

import java.util.HashSet;
import java.util.Set;

@Configuration
public class SwaggerConfig {

    private ApiInfo apiInfo(){
        return new ApiInfoBuilder()
                .title("SwaggerInfo")
                .description("petbook swagger")
                .build();
    }

    public Docket swaggerApi(){
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("petbook")
                .consumes(getConsumeTypes())
                .produces(getProduceTypes())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.psgstellar.petbook.controller"))
                .paths(PathSelectors.any())
                .build();
    }
    private Set<String> getConsumeTypes(){
        Set<String> consumes = new HashSet<>();
        consumes.add("application/json:charset=UTF-8");
        consumes.add("application/x-www-form-urlencoded");
        return consumes;
    }

    private Set<String> getProduceTypes(){
        Set<String> produces = new HashSet<>();
        produces.add("application/json:cahrset=UTF-8");
        return produces;
    }
}

package edu.kh.todo.main.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController //(@Controller + @ResponseBody)
public class MainController {

	@GetMapping("/getPortNo")
	public List<String> getPortNo(){
		
		return Arrays.asList("서버포트는 8080", "리액트 포트는 3000");
	}
	
	@PostMapping("/getUserInfo")
	public String getUserInfo(@RequestBody HashMap<String, Object> map) {
		
		String message = "데이터가 없습니다.";
		
		if(map.get("name").equals("홍길동") && map.get("age").equals("20")) {
			message = "홍길동님은 20세입니다.";
		}
		
		return message;
	}
	
}

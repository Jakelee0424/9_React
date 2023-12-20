package edu.kh.data.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.ProtocolException;
import java.net.URL;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class APIController {

	
	private static final String key = "BdCiUtpe7ZCF194go46384Fe9Be31jRDX%2FU7dilEcMeQBPc5fIpH8QP9q%2FfcqRqjp8NO8Qe8uF6tWqHE8M6TMOg%3D%3D";
	
	@RequestMapping(value = "air.do", produces="application/json; charset=utf-8")
	@ResponseBody
	public String airPollution(@RequestParam("location") String location) throws IOException {
		
		String url = "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty";
		url += "?serviceKey=" + key;
		url += "&returnType=json";
		url += "&sidoName=%EC%84%9C%EC%9A%B8";
		url += "&ver=1.0";
		
		
		URL requestUrl = new URL(url);

		HttpURLConnection urlConnection = (HttpURLConnection)requestUrl.openConnection();

		urlConnection.setRequestMethod("GET");

		BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));

		String responseData = "";
		String line; 

		while((line = br.readLine()) != null) {
					responseData += line;
				}
		br.close();

		urlConnection.disconnect(); 

		System.out.println("responseData::" + responseData);
				
		return responseData;
	}
	
	
}


package br.com.userede.utils;

public class Util {

	public static Integer getInteger(String text) {
		text = text.replace("€", "");
		text = text.replace(" ", "");
		text = text.replace(".", "");
		return Integer.valueOf(text);
	}

}

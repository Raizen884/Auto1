package br.com.userede.test;

import org.junit.Assert;
import org.junit.Test;

import br.com.userede.utils.Util;

public class FunctionTests {
	@Test
	public void getIntegerFromPrice()
	{
		Integer value = Util.getInteger("6.350 €");
		Assert.assertEquals(Integer.valueOf(6350), value);
	}
}

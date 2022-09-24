// 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。
I2C_LCD1602.LcdInit(39);
I2C_LCD1602.ShowString("Hello!",0,0);
I2C_LCD1602.ShowNumber(cbit_小车类.Ultrasonic_Car(),0,1);

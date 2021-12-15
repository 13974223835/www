import java.util.Scanner;

public class practice {
    public static void main(String[] args){
            System.out.println("欢迎是用ATM机系统");
            System.out.println("请输入 1：查询账户， 2：存钱， 3：取钱， 4：退出");

            int x =new Scanner(System.in).nextInt();
            switch(x) {
                case 1:
                        System.out.println("您的账户余额为1000.0元");
                        break;
                case 2:
                        System.out.println("存钱成功，您的账户余额为1500.0元");
                        break;
                case 3:
                        System.out.println("取钱成功，您的账户余额为1300.0元");
                        break;
                case 4:
                        System.out.println("退出成功，谢谢使用");
                        break;
                default:
                        System.out.println("输入错误，请重新输入");
            }
    }
}

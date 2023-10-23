
import * as Yup from 'yup'


const signUpSchema = Yup.object().shape({
    name: Yup.string().min(2, "نام کوتاه میباشد").max(30, "نام طولانی میباشد").required("نام الزامی میباشد"),
    lastName: Yup.string().min(2, "نام خانوادگی کوتاه میباشد").max(60, "نام خانوادگی طولانی میباشد").required("نام خانوادگی الزامی میباشد"),
    email: Yup.string().email("ایمیل معتبر وارد کنید").required("ایمیل الزامی میباشد"),
    password: Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "رمز عبور باید 8 رقم و حاوی یک حرف کوچک و بزرگ انگلیسی , یک عدد , یک کاراکترباشذ"
      ).required("رمزعبور الزامی میباشد"),
      confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'رمز عبور مشابه نمیباشد')
})


const signInSchema = Yup.object().shape({
  email: Yup.string().email("ایمیل معتبر وارد کنید").required("ایمیل الزامی میباشد"),
  password: Yup.string().required("رمزعبور الزامی میباشد"),
})




export  {signUpSchema , signInSchema};
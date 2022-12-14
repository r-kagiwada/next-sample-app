import { useFormik } from "formik";
import { useRouter } from "next/router";
import Yup from "../../utils/yup";

interface Login {
  email: string;
  password: string;
}

const login = Yup.object().shape({
  email: Yup.string().label("メールアドレス").email().max(255).required(),
  password: Yup.string()
    .label("パスワード")
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9.?/-]/)
    .min(8)
    .max(50)
    .required(),
});

/**
 * ログイン画面
 */
export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async ({ email, password }: Login) => {
    console.log("TODO login処理", email, password);
    router.push('/');
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: login,
    onSubmit: async (values) => {
      await handleLogin({
        email: values.email,
        password: values.password,
      });
    },
  });

  return (
    <div className="flex justify-center mt-14">
      <form
        className="w-[392px] text-center"
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <p className="text-xl font-bold">ログイン</p>

        <div className="mt-8 space-y-2 text-left">
          <div className="mx-6">
            <label>
              <span className="text-sm font-bold">メールアドレス</span>
              <div className="mt-1">
                <input
                  className="py-1 px-2 w-full border border-[#A1A6AC] rounded placeholder-theme-light focus:border-primary focus:outline-0"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="test@example.com"
                  data-testid="email"
                />
                {formik.errors.email && (
                  <ul data-testid="test-id-email-error">
                    {[formik.errors.email]?.map((message, i) => (
                      <li key={i} className="text-sm text-accent">
                        {message}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </label>
          </div>
          <div className="mx-6">
            <label>
              <span className="text-sm font-bold">パスワード</span>
              <div className="mt-1">
                <input
                  className="py-1 px-2 w-full border border-[#A1A6AC] rounded placeholder-theme-light focus:border-primary focus:outline-0"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="Password"
                  data-testid="password"
                />
                {formik.errors.password && (
                  <ul data-testid="test-id-password-error">
                    {[formik.errors.password]?.map((message, i) => (
                      <li key={i} className="text-sm text-accent">
                        {message}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </label>
          </div>
        </div>

        <div className="mt-10">
          <button
            className="bg-primary text-white hover:bg-primary-dark focus:bg-primary-dark text-sm font-bold disabled:opacity-30 disabled:pointer-events-none py-1 px-2 inline-flex min-w-[140px] h-[40px] justify-center items-center rounded"
            type="button"
            onClick={() => formik.handleSubmit()}
            disabled={!formik.isValid || !formik.dirty}
            data-testid="login-button"
          >
            ログイン
          </button>
        </div>
      </form>
    </div>
  );
}

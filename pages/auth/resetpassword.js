import Head from "next/head";
import { useRouter } from "next/router";
import { useLazyQuery, gql } from "@apollo/client";

import PageHeading from "../../components/PageHeading";

const PASSWORD_RESET_QUERY = gql`
  query PasswordReset($token: String!) {
    passwordReset(token: $token) {
      __typename
      passwordResetTokenExpiry
    }
  }
`;

const ResetPassword = () => {
  const router = useRouter();
  const { token } = router.query;

  const ref = React.useRef();
  const [formData, setFormData] = React.useState({});

  const [verifyToken, { loading, error }] = useLazyQuery(PASSWORD_RESET_QUERY);

  React.useEffect(() => {
    if (token) verifyToken({ variables: { token } });
  }, [token]);

  React.useEffect(() => {
    if (!ref.current) return;

    if (formData.password != formData.passwordConfirm) {
      ref.current.setCustomValidity("Passwords don't match");
    } else {
      ref.current.setCustomValidity("");
    }
  }, [formData.passwordConfirm]);

  const submitForm = (e) => {
    e.preventDefault();

    console.log("here");
  };

  return (
    <>
      <Head>
        <title>Reset Password</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container p-10 flex flex-col">
        <PageHeading title="Reset Your Password" />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {error ? (
              <p className="text-red-500 text-lg font-bold my-6">
                This password reset link has expired. Please use the Forgot
                Password form again to retrieve a new link in your email!
              </p>
            ) : (
              <>
                <p className="leading-relaxed mb-6">
                  Forgot your password? No worries! Use the form below to set a
                  new one.
                </p>

                <form onSubmit={(e) => submitForm(e)}>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="appearance-none bg-gray-200 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="passwordConfirm"
                    >
                      Confirm New Password
                    </label>
                    <input
                      ref={ref}
                      type="password"
                      name="passwordConfirm"
                      id="passwordConfirm"
                      className="appearance-none bg-gray-200 rounded-lg w-full py-4 px-3 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-full bg-red-600 hover:bg-red-700 text-white text-md lg:text-xl py-4 px-10 w-full"
                  >
                    Set New Password
                  </button>
                </form>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ResetPassword;

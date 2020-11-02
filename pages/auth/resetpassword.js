import Head from "next/head";
import { useRouter } from "next/router";
import { useLazyQuery, gql, useMutation } from "@apollo/client";

import PageHeading from "../../components/PageHeading";

const PASSWORD_RESET_QUERY = gql`
  query PasswordReset($token: String!) {
    passwordReset(token: $token) {
      __typename
      passwordResetTokenExpiry
    }
  }
`;

const RESET_PASSWORD_MUTATION = gql`
  mutation ResetPassword($token: String!, $password: String!) {
    resetPassword(token: $token, password: $password) {
      __typename
      id
    }
  }
`;

const ResetPassword = () => {
  const router = useRouter();
  const { token } = router.query;

  const ref = React.useRef();
  const [formData, setFormData] = React.useState({
    password: "",
    passwordConfirm: "",
    submitting: false,
    submitted: false,
  });

  const [verifyToken, { loading, error }] = useLazyQuery(PASSWORD_RESET_QUERY);
  const [resetPassword] = useMutation(RESET_PASSWORD_MUTATION, {
    onCompleted: (data) => {
      if (data.resetPassword) {
        setFormData({
          ...formData,
          submitting: false,
          submitted: true,
        });
      }
    },
  });

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
  }, [formData]);

  const submitForm = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      submitting: true,
    });

    resetPassword({
      variables: {
        token,
        password: formData.password,
      },
    });
  };

  return (
    <>
      <Head>
        <title>Reset Your Password</title>
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
            ) : formData.submitted ? (
              <p className="text-green-500 text-lg font-bold my-6">
                Success! You can now log in to the app using your new password.
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
                      className="appearance-none bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline"
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
                      className="appearance-none bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg w-full py-4 px-3 text-lg leading-tight focus:outline-none focus:shadow-outline"
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
                    disabled={
                      formData.password?.length == 0 ||
                      formData.passwordConfirm?.length == 0
                    }
                  >
                    {formData.submitting ? "One sec..." : "Set New Password"}
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

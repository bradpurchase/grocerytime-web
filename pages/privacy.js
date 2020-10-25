import Head from "next/head";

import PageHeading from "../components/PageHeading";

const Privacy = React.memo(() => (
  <>
    <Head>
      <title>GroceryTime: Privacy Policy</title>
    </Head>

    <div className="container p-10 flex flex-col">
      <PageHeading title="Privacy Policy" />

      <p className="leading-relaxed">
        Your privacy is important to us. It is GroceryTime's policy to respect
        your privacy regarding any information we may collect from you across
        our website,{" "}
        <a href="https://grocerytime.app">https://grocerytime.app</a>, and other
        sites we own and operate.
      </p>
      <p className="leading-relaxed mt-6">
        We only ask for personal information when we truly need it to provide a
        service to you. We collect it by fair and lawful means, with your
        knowledge and consent. We also let you know why we’re collecting it and
        how it will be used.
      </p>
      <p className="leading-relaxed mt-6">
        We only retain collected information for as long as necessary to provide
        you with your requested service. What data we store, we’ll protect
        within commercially acceptable means to prevent loss and theft, as well
        as unauthorized access, disclosure, copying, use or modification.
      </p>
      <p className="leading-relaxed mt-6">
        We don’t share any personally identifying information publicly or with
        third-parties, except when required to by law.
      </p>
      <p className="leading-relaxed mt-6">
        Our website may link to external sites that are not operated by us.
        Please be aware that we have no control over the content and practices
        of these sites, and cannot accept responsibility or liability for their
        respective privacy policies.
      </p>
      <p className="leading-relaxed mt-6">
        You are free to refuse our request for your personal information, with
        the understanding that we may be unable to provide you with some of your
        desired services.
      </p>
      <p className="leading-relaxed mt-6">
        Your continued use of our website will be regarded as acceptance of our
        practices around privacy and personal information. If you have any
        questions about how we handle user data and personal information, feel
        free to contact us.
      </p>
      <p className="leading-relaxed mt-6">
        This policy is effective as of 21 October 2020.
      </p>
    </div>
  </>
));

export default Privacy;

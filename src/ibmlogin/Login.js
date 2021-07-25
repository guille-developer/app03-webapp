import React from "react";
import AppID from "ibmcloud-appid-js";
import logo from "../assets/img/logo.png";

function Login() {
  const appID = React.useMemo(() => {
    return new AppID();
  }, []);

  const [errorState, setErrorState] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  (async () => {
    try {
      await appID.init({
        clientId: "e7814457-bc3f-49c2-93ac-9eeabcaf640a",
        discoveryEndpoint:
          "https://us-south.appid.cloud.ibm.com/oauth/v4/b113391e-d6bb-49b6-a3ae-ca3204b51841/.well-known/openid-configuration",
      });
    } catch (e) {
      setErrorState(true);
      setErrorMessage(e.message);
    }
  })();

  const [welcomeDisplayState, setWelcomeDisplayState] = React.useState(false);
  const [loginButtonDisplayState, setLoginButtonDisplayState] =
    React.useState(true);
  const [userName, setUserName] = React.useState("");
  const [token, setToken] = React.useState("");
  console.log(token);

  const loginAction = async () => {
    try {
      const tokens = await appID.signin();
      setErrorState(false);
      setLoginButtonDisplayState(false);
      setWelcomeDisplayState(true);
      setUserName(tokens.idTokenPayload.name);
      setToken(tokens);
    } catch (e) {
      setErrorState(true);
      setErrorMessage(e.message);
    }
  };

  return (
    <>
      <div className="h-screen bg-green-500 w-screen flex flex-col justify-center items-center text-center">
        {welcomeDisplayState && (
          <div> Welcome {userName}! You are now authenticated.</div>
        )}
        {loginButtonDisplayState && (
          <>
            <main className="md:w-1/2 w-screen px-4 sm:px-6">
              <div>
                <div className="flex justify-center items-center text-center  m-0 p-5 bg-green-400 rounded-t-lg">
                  <img className="w-20 h-20" src={logo} alt="logo home" />
                </div>
                <div className="relative text-2xl bg-gray-100 text-green-600">
                  <div className="p-12 font-bold text-2sm text-left">
                    <p>Hello</p>
                    <p>eGrenner!</p>
                  </div>
                  <div className="absolute w-65 h-65 top-32 left-3">
                    <div className="w-16 h-16 bg-white border-2 rounded-full border-green-600" />
                    <img
                      alt="icon login screen"
                      className="w-5 h-7 absolute m-auto inset-0 rounded-lg"
                      src="https://via.placeholder.com/22x28"
                    />
                  </div>
                </div>
                <div className="h-full flex focus:justify-center items-center text-center  m-0 p-16 bg-gray-200 rounded-b-lg">
                  <button
                    className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-lg"
                    id="login"
                    onClick={loginAction}
                  >
                    Sign in or create
                  </button>
                </div>
              </div>
            </main>
          </>
        )}
        {errorState && <div style={{ color: "red" }}>{errorMessage}</div>}
      </div>
    </>
  );
}

export default Login;

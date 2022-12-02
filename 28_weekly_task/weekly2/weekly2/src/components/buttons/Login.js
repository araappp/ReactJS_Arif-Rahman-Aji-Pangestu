import React from "react";

const Login = () => {
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-outline-dark ms-auto"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          <span className="fa fa-sign-in me-1"></span>Login
        </button>

        <div
          className="modal fade"
          id="loginModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Login
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <a
                  href="https://accounts.google.com/v3/signin/identifier?dsh=S-1005870904%3A1667823673645565&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=in&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession"
                  className="btn btn-dark w-100 mb-4"
                >
                  <span className="fa fa-google me-2"></span>Sign In With Google
                </a>

                <a
                  href="https://id-id.facebook.com/"
                  className="btn btn-dark w-100 mb-4"
                >
                  <span className="fa fa-facebook me-2"></span>Sign In With Google
                </a>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-dark w-100 mt-4"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

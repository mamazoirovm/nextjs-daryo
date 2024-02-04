import { ReactNode } from "react";
import "./globals.css";

import "./pages.css";

const Layout = (props: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <title>Next first App</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <div className="wrapper">
          <div className="container">
            <div className="navbar">
              <a className="logo" href="#">
                <img
                  className="logo"
                  src="https://daryo.uz/logo/logo-white.svg"
                  alt=""
                />
              </a>
              <ul>
                <li>Mahalliy</li>
                <li>Markaziy Osiyo</li>
                <li>dunyo</li>
                <li>pul</li>
                <li>madaniyat</li>
                <li>layfstayle</li>
                <li>sport</li>
                <li>multimedia</li>
              </ul>
              <button className="bnt">
                <i className="fa-solid fa-moon"></i>
              </button>
              <button className="bnt">
              <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <select name="" id="">
                <option value="">O'zb</option>
                <option value="">Russian</option>
                <option value="">English</option>
              </select>
              <button className="bnt">
              <i className="fa-solid fa-bars"></i>
              </button>
            </div>
            {props.children}
          </div>
        </div>
      </body>
    </html>
  );
};
export default Layout;

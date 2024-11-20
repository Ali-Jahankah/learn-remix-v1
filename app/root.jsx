import indexStyles from './index.css';
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="main">
          <header className="header">
            <ul className="nav-ul">
              <li className="nav-li">
                {' '}
                <NavLink className="nav-link" to="/" />
                Home
              </li>
              <li className="nav-li">
                <NavLink className="nav-link" to="/notes" />
                Notes
              </li>
            </ul>
          </header>
          <article className="page-container">
            <Outlet />
          </article>
          <footer className="footer">
            <h5>
              Created by <a href="https://linktr.ee/uaral">Ali Jahankhah</a>
            </h5>
          </footer>
        </main>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: indexStyles
    }
  ];
}

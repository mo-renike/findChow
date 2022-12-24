// import React, { Component } from 'react'

import { Helmet } from "react-helmet-async";

// export class ErrorBoundary extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }
//     static getDerivedStateFromError(error) {
//         // Update state so the next render will show the fallback UI.
//         return { hasError: true };
//     }
//     componentDidCatch(error, errorInfo) {
//         // You can also log the error to an error reporting service
//         console.log(error, errorInfo);
//     }
//     render() {
//         if (this.state.hasError) {
//             // You can render any custom fallback UI
//             return <h1>Something went wrong.</h1>;
//         }
//         return this.props.children
//     }
// }

// export default ErrorBoundary


export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "3rem",
        justifyContent: "center",
        alignItems: "left",
        flexDirection: "column",
        width: "70%",
        height: "100vh",
      }}
      role="alert"
    >
      <Helmet >
        <title>Something went wrong</title>
      </Helmet>
      <h1>Something went wrong:</h1>
      <p style={{ color: "red" }}>{error.message}</p>
      <button style={{ width: "fit-content" }} className="button" onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

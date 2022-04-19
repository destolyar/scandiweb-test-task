import React from "react";
import '../../../styles/components/error.scss'

export class ErrorLink extends React.Component {
  render() {
    return(
      <main className="error">
        <h1 className="error__text">Page Not Found</h1>
      </main>
    )
  }
}
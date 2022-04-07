import React from "react";
import '../styles/components/footer.scss';

export class Footer extends React.Component {
  render() {
    return(
      <footer className="footer">
        <p className="footer__text">
          Developed for Scandiweb evaluators by Metik Vladislav in 2022
        </p>
      </footer>
    )
  }
}
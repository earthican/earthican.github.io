const React = require('react');
const mui = require('material-ui');
const Colors = require('material-ui/lib/styles/colors');

const data = require('./data/greeting.js');

const Greeting = React.createClass({

  getInitialState () {
    return {
    };
  },

  componentDidMount() {
  },

  componentWillMount() {
  },

  render() {

    return (
      <div className="content-box" id="greeting">
        <h1 className="content-header"><strong>{data.greeting}</strong></h1>
        <h2 className="content-subheader">Welcome to my page</h2>
        <p>
          Thanks for visiting. I'm Justin, a
          passionate and curious Software Engineer currently working a Software Data
          Engineering role at <a href="https://www.rallyhealth.com/">Rally Health</a> in San Francisco, CA.
        </p>
      </div>
    );
  }

});


module.exports = Greeting;
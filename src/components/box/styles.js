// import default box styles
import styles from 'assets/styles/box';

// define custom styles
const custom = {};

export default (props) => Object.assign({}, styles(props), custom);

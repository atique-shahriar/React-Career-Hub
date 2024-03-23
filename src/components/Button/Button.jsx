import PropTypes from 'prop-types';

const Button = ({ btnText }) => {
    return (
        <div>
            <a className="btn bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold">{btnText}</a>
        </div>
    );
};
Button.propTypes = {
    btnText: PropTypes.object,
}

export default Button;
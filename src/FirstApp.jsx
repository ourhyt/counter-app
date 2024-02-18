import PropTypes from "prop-types";

const newMessage = {
    cell: 'cell',
    phone: 'phone',
}

const funt = ()=> 'Pablo';
export function App({ title, subtitle } ) {
    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            {/*<h1>{funt()}</h1>*/}
            {/*<h1>{JSON.stringify(newMessage)}</h1>*/}
            <p>{subtitle}</p>
            <p>{subtitle}</p>
        </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number,
}

App.defaultProps = {
    title: 'Pablo',
    subtitle: 123,
    isEnabled: false,
}
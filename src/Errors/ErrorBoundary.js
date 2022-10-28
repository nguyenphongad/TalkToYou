function ErrorComponent({ error }) {
    return (
        <div style={{ 'margin': '100px 100px', 'color': 'red'}}>
            <span style={{'fontWeight':'bold'}}>Error: </span> {error.message}
        </div>
    );
}
export default ErrorComponent;
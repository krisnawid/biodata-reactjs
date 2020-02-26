const e = React.createElement;

function LikeButton() {
    return e(
        'button',
        {
            onClick: () => alert('berasil')
        },
        'Like'
    );
}


const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
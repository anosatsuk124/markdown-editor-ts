type Props = {
    Text: string;
    setText: (text: string) => void;
};

const EdittingArea = (props: Props) => {
    return (
        <div className="editting-area">
            <textarea
                value={props.Text}
                onChange={(e) => props.setText(e.target.value)}
            ></textarea>
        </div>
    );
};

export default EdittingArea;

import DOMPurify from 'dompurify';

type Props = {
    Text: string;
};

const renderSafely = (raw: string) => DOMPurify.sanitize(raw);

const Renderer = (props: Props) => {
    return (
        <div className="renderer">
            <div
                dangerouslySetInnerHTML={{ __html: renderSafely(props.Text) }}
            ></div>
        </div>
    );
};

export default Renderer;

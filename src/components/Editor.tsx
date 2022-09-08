import { useState } from 'react';
import EdittingArea from './EdittingArea';
import Renderer from './Renderer';
import './editor.scss';

const Editor = () => {
    const [Text, setText] = useState('');

    return (
        <div className="editor">
            <EdittingArea
                Text={Text}
                setText={(text: string): void => setText(text)}
            />
            <Renderer Text={Text} />
        </div>
    );
};

export default Editor;

import { render } from 'preact';

import EmojiButtonGrid from './emoji-button-grid';

export function App() {
	return (
		<EmojiButtonGrid />
	);
}

render(<App />, document.getElementById('app'));

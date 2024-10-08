import { useState } from "react"
import { SearchIcon } from "lucide-react"
import styles from "./EmojiButtonGrid.module.css"

function EmojiButton({ emoji, label, onClick }) {
	return (
		<div className={styles.emojiButton}>
			<button
				className={styles.emojiButtonIcon}
				onClick={onClick}
				aria-label={label}
			>
				{emoji}
			</button>
			<span className={styles.emojiButtonLabel}>{label}</span>
		</div>
	)
}

export default function EmojiButtonGrid() {
	const [searchTerm, setSearchTerm] = useState("")

	const emojiButtons = [
		{ emoji: "🐍", label: "Python 3.13.0" },
		{ emoji: "🐬", label: "MySQL 8.4" },
	]

	const filteredButtons = emojiButtons.filter((button) =>
		button.label.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Tutorials</h2>
			<div className={styles.searchContainer}>
				<input
					type="text"
					placeholder="Search tutorials..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className={styles.searchInput}
				/>
				<SearchIcon className={styles.searchIcon} size={20} />
			</div>
			{filteredButtons.length > 0 ? (
				<div className={styles.grid}>
					{filteredButtons.map((button, index) => (
						<EmojiButton
							key={index}
							emoji={button.emoji}
							label={button.label}
							onClick={() => console.log(`Clicked: ${button.label}`)}
						/>
					))}
				</div>
			) : (
				<p className={styles.noResults}>No tutorials found matching your search.</p>
			)}
		</div>
	)
}

import { useState } from "react"
import { SearchIcon } from "lucide-react"
import styles from "./EmojiButtonGrid.module.css"

function EmojiButton({ emoji, label, url }) {
	return (
		<div className={styles.emojiButton}>
			<a
				className={styles.emojiButtonIcon}
				aria-label={label}
				href={url}
				target="_blank"
			>
				{emoji}
			</a>
			<span className={styles.emojiButtonLabel}>{label}</span>
		</div>
	)
}

export default function EmojiButtonGrid() {
	const [searchTerm, setSearchTerm] = useState("")

	const emojiButtons = [
		{ emoji: "🐍", label: "Python 3.13.0", url: 'https://python-3-13.starttutorial.com/' },
		{ emoji: "🐬", label: "MySQL 8.4", url: 'https://mysql-8-4.starttutorial.com/' },
		{ emoji: "🟨", label: "JavaScript 2023", url: 'https://javascript-2023.starttutorial.com/' },
	]

	const filteredButtons = emojiButtons.filter((button) =>
		button.label.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>StartTutorial 📚</h2>
			<p className={styles.overview}>StartTutorial is AI-generated tutorial platform. Start with your favorite tutorial! 😄</p>
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
							url={button.url}
						/>
					))}
				</div>
			) : (
				<p className={styles.noResults}>No tutorials found matching your search.</p>
			)}
		</div>
	)
}

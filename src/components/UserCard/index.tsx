import './styles.scss'

interface UserCardProps {
	id: number;
	image: string;
	username: string;
}

export function UserCard({ id, image, username }: UserCardProps) {
	return (
		<button className="container">
			<header>
				<div />
				<img src={image} alt={username} />
			</header>
			<div className='user-info'>
				<p className="username">{username}</p>
			</div>
		</button>
	)
}
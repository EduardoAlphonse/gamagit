import './styles.scss';

type UserCardProps = {
	image: string;
	username: string;
}

export function UserCard({ image, username }: UserCardProps) {
	return (
		<div className="container">
			<header>
				<div />
				<img src={image} alt={username} />
			</header>
			<div className='user-info'>
				<p className="username">{username}</p>
			</div>
		</div>
	)
}
import { useHistory, useParams } from 'react-router-dom'
import './styles.scss'

type UserCardProps = {
	image: string;
	username: string;
	name?: string;
}

type ParamsProps = {
	username: string;
}

export function UserCard({ image, username }: UserCardProps) {
	const history = useHistory();
	const { username: user } = useParams<ParamsProps>();

	function viewUser() {
		if (!user) {
			history.push(`/user/${username}`);
		}
	}

	return (
		<button className="container" onClick={viewUser}>
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
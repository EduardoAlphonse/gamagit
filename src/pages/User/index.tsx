import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'

import { UserCard } from '../../components/UserCard';

import { api } from '../../services/githubApi';

import './styles.scss'

type UserInfoCard = {
	image: string;
	username: string;
	name: string;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
}

type ParamsProps = {
	username: string;
}

export function User() {
	const [user, setUser] = useState<UserInfoCard>({} as UserInfoCard);
	const { username } = useParams<ParamsProps>();
	const history = useHistory();

	async function getUser() {
		console.log(username);
		const { data } = await api.get(`/users/${username}`);
		const newUser: UserInfoCard = {
			image: data.avatar_url,
			username,
			name: data.name,
			public_repos: data.public_repos,
			public_gists: data.public_gists,
			following: data.following,
			followers: data.followers,
		}

		setUser(newUser);
	}

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div id="page-container">
			<div id="page-content">
				<header className='user-header'>
					<div className="user-info-card">
						<UserCard
							image={user.image}
							username={user.username}
						/>
						<div className="info">
							<p>repositórios: <span className="data">{user.public_repos}</span></p>
							<p>gists: <span className="data">{user.public_gists}</span></p>
							<p>followers: <span className="data">{user.followers}</span></p>
							<p>following: <span className="data">{user.following}</span></p>
						</div>
					</div>

					<div className="options">
						<button onClick={() => history.goBack()}>
							<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M12.5101 1.79291L2.51008 11.7929V13.2071L12.5101 23.2071L13.9243 21.7929L5.6314 13.5H22.4899V11.5H5.6314L13.9243 3.20712L12.5101 1.79291Z" fill="#333333" />
							</svg>
						</button>
					</div>
				</header>
			</div>
		</div>
	)
}
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import { UserCard } from '../../components/UserCard';
import { RepositoryCard } from '../../components/RepositoryCard';

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

type Repository = {
	id: number;
	name: string;
	description: string | null;
	updated_at: string;
	language: string | null;
	homepage: string | null;
	clone_url: string;
	html_url: string;
}

type ParamsProps = {
	username: string;
}

export function User() {
	const [user, setUser] = useState<UserInfoCard>({} as UserInfoCard);
	const [repositories, setRepositories] = useState<Repository[]>([]);
	const { username } = useParams<ParamsProps>();

	useEffect(() => {
		(async function getUser() {
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
		})();
	}, [username]);

	useEffect(() => {
		(async function getRepositories() {
			const { data } = await api.get(`/users/${username}/repos?per_page=100&sort=updated`);

			const newRepositories: Repository[] = data.map((repo: any) => {
				const hasHomepage = !!repo.homepage;
				console.log('hasHomepage', hasHomepage);
				const homepage = hasHomepage && !repo.homepage.includes('http') ? `https://${repo.homepage}` : repo.homepage;

				console.log('homepage', homepage);

				return {
					id: repo.id,
					name: repo.name,
					description: repo.description,
					updated_at: repo.updated_at,
					language: repo.language,
					homepage,
					clone_url: repo.clone_url,
					html_url: repo.html_url,
				}
			});

			setRepositories(newRepositories);
		})();
	}, [username]);

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
							<p>seguidores: <span className="data">{user.followers}</span></p>
							<p>seguindo: <span className="data">{user.following}</span></p>
							<p>websites:&nbsp;
								<span className="data">
									{repositories.filter(repository => repository.homepage).length}
								</span>
							</p>
						</div>
					</div>

					<div className="options">
						<Link className='back-button' to='/'>
							<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M12.5101 1.79291L2.51008 11.7929V13.2071L12.5101 23.2071L13.9243 21.7929L5.6314 13.5H22.4899V11.5H5.6314L13.9243 3.20712L12.5101 1.79291Z" fill="#333333" />
							</svg>
						</Link>
					</div>
				</header>

				<section className="repositories">
					{repositories.map(repository => (
						<RepositoryCard
							key={repository.id}
							name={repository.name}
							updated_at={repository.updated_at}
							language={repository.language}
							html_url={repository.html_url}
							clone_url={repository.clone_url}
							homepage={repository.homepage}
						>
							{repository.description}
						</RepositoryCard>
					))}
				</section>

				<input className='input-to-copy' />
			</div>
		</div>
	)
}
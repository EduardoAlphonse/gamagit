import { useState, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom';
import { UserCard } from '../../components/UserCard';
import { api } from '../../services/githubApi';
import './styles.scss'

type UserCardType = {
	id: number;
	image: string;
	username: string;
}

export function Home() {
	const [input, setInput] = useState('');
	const [users, setUsers] = useState<UserCardType[]>([]);

	function handleInput(event: ChangeEvent<HTMLInputElement>) {
		setInput(event.target.value);
	}

	async function searchUser(event: FormEvent) {
		event.preventDefault();

		if (input === '') return;

		const { data } = await api.get(`/search/users?q=${input}`);
		const newUsers: UserCardType[] = data.items.map((item: any): UserCardType => {
			return {
				id: item.id,
				image: item.avatar_url,
				username: item.login,
			}
		});

		setUsers(newUsers);
	}

	return (
		<div id='page-container'>
			<div id='page-content'>
				<header className='search-header'>
					<form onSubmit={searchUser}>
						<input type='text' placeholder='github_username' onChange={handleInput} />

						<button type='submit'>
							<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={input && 'filled'}>
								<path fillRule="evenodd" clipRule="evenodd" d="M10.2541 3.64642C6.60481 3.64642 3.64645 6.60479 3.64645 10.2541C3.64645 13.9034 6.60481 16.8618 10.2541 16.8618C13.9035 16.8618 16.8618 13.9034 16.8618 10.2541C16.8618 6.60479 13.9035 3.64642 10.2541 3.64642ZM1.64645 10.2541C1.64645 5.50022 5.50024 1.64642 10.2541 1.64642C15.008 1.64642 18.8618 5.50022 18.8618 10.2541C18.8618 12.2708 18.1683 14.1254 17.0068 15.5927L23.3536 21.9394L21.9393 23.3536L15.5926 17.0069C14.1254 18.1683 12.2707 18.8618 10.2541 18.8618C5.50024 18.8618 1.64645 15.008 1.64645 10.2541Z" fill='#B2B2B2' />
							</svg>
						</button>
					</form>
				</header>

				{users.length ? (
					<main className='user-cards-container'>
						{users.map(user => (
							<Link
								to={`/user/${user.username}`}
								key={user.id}
							>
								<UserCard
									image={user.image}
									username={user.username}
								/>
							</Link>
						))}
					</main>
				) : (
					<main className="empty-content">
						<div>
							<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M12.5101 1.79291L2.51008 11.7929V13.2071L12.5101 23.2071L13.9243 21.7929L5.6314 13.5H22.4899V11.5H5.6314L13.9243 3.20712L12.5101 1.79291Z" fill="#333333" />
							</svg>

							<h1>
								Comece procurando um usuário
							</h1>
						</div>
					</main>
				)}
			</div>
		</div>
	)
}
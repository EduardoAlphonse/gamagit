import { ReactNode } from 'react'

import './styles.scss'

type RepositoryCardProps = {
	children: ReactNode
	name: string;
	updated_at: string;
	language: string | null;
	homepage: string | null;
	clone_url: string;
	html_url: string;
}

export function RepositoryCard({
	children,
	name,
	updated_at,
	language,
	html_url,
	clone_url,
	homepage,
}: RepositoryCardProps) {
	const [year, month, day] = updated_at.slice(0, 10).split('-');

	return (
		<div className='repository-card-container'>
			<div className="body">
				<h2>{name}</h2>
				<p className='description'>
					{children}
				</p>
				<p className='update'>Última atualização: <span className='data'>{`${day}/${month}/${year}`}</span></p>
				{language && (
					<span className='tag'>
						{language}
					</span>
				)}
			</div>

			<footer>
				<button className='repository-button'>
					View Repo
				</button>
				<button className='repository-button'>
					View Repo
				</button>
				<button className='repository-button'>
					View Repo
				</button>
			</footer>
		</div>
	)
}
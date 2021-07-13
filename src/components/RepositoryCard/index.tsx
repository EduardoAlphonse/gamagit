import { ReactNode } from 'react'
import { RepositoryButton } from '../RepositoryButton';

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

	function copyCloneUrl() {
		const inputToCopy: HTMLInputElement = document.querySelector('.input-to-copy') as HTMLInputElement;
		inputToCopy.value = clone_url;
		inputToCopy.select();
		document.execCommand('copy');
	}

	return (
		<div className='repository-card-container'>
			<div className='body'>
				<div className="title-and-description">
					<h2>{name}</h2>
					<p className='description'>
						{children}
					</p>
				</div>
				<div className='last-update-and-language'>
					<p className='update'>Última atualização: <span className='data'>{`${day}/${month}/${year}`}</span></p>
					{language && (
						<span className='tag'>
							{language}
						</span>
					)}
				</div>
			</div>

			<footer>
				<RepositoryButton
					title='Repo'
					icon='visit'
					href={html_url}
				/>
				<RepositoryButton
					title='Clonar'
					icon='copy'
					onClick={copyCloneUrl}
				/>
				{homepage && (
					<RepositoryButton
						title='Website'
						icon='website'
						href={homepage}
					/>
				)}
			</footer>
		</div>
	)
}
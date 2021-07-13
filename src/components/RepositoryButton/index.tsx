import { ReactComponent as Visit } from '../../assets/icons/visit-icon.svg';
import { ReactComponent as Copy } from '../../assets/icons/copy-icon.svg';
import { ReactComponent as Website } from '../../assets/icons/website-icon.svg';

import './styles.scss'

type Icons = 'visit' | 'copy' | 'website';

type RepositoryButtonProps = {
	title: string;
	href?: string;
	icon: Icons;
	onClick?: () => void;
}

const icons = {
	visit: <Visit />,
	copy: <Copy />,
	website: <Website />,
}

export function RepositoryButton({
	title, href, icon, onClick
}: RepositoryButtonProps) {
	console.log(title);
	console.log(icon);
	return (
		<>
			{href ? (
				<a
					href={href}
					className={`repository-button ${icon === 'website' && 'homepage'}`}
					target='_blank'
					rel='noreferrer'
				>
					{title}
					{icons[icon]}
				</a>
			) : (
				<button className='repository-button' onClick={onClick}>
					{title}
					{icons[icon]}
				</button>
			)}
		</>
	)
}
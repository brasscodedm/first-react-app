import styles from './Contact.module.scss';
import React from 'react';
import github from 'assets/github.png';
import instagram from 'assets/instagram.png';
import twitch from 'assets/twitch.png';
import youtube from 'assets/youtube.png';
import discord from 'assets/discord.png';

export const Contact = () => {
	return (
		<div className={styles.root}>
			<h1 className={styles.header}>Contact with me!</h1>
			<div className={styles.linksList}>
				<a
					className={styles.externalLink}
					href={'https://discord.gg/kFXAUegx'}
					target="_blank"
					rel="noreferrer"
				>
					<img className={styles.linkImg} src={discord} alt={'Discord'} />
					<div className={styles.linkName}>Discord</div>
				</a>
				<a
					className={styles.externalLink}
					href={'https://github.com/brasscodedm/'}
					target="_blank"
					rel="noreferrer"
				>
					<img className={styles.linkImg} src={github} alt={'Github'} />
					<div className={styles.linkName}>Github</div>
				</a>
				<a
					className={styles.externalLink}
					href={'https://www.youtube.com/channel/UC3gr6dkka1hYP-oZPWCQ84Q'}
					target="_blank"
					rel="noreferrer"
				>
					<img className={styles.linkImg} src={youtube} alt={'Youtube'} />
					<div className={styles.linkName}>Youtube</div>
				</a>
				<a
					className={styles.externalLink}
					href={'https://www.twitch.tv/brasscode'}
					target="_blank"
					rel="noreferrer"
				>
					<img className={styles.linkImg} src={twitch} alt={'Twitch'} />
					<div className={styles.linkName}>Twitch</div>
				</a>
				<a
					className={styles.externalLink}
					href={'https://www.instagram.com/brass.code/'}
					target="_blank"
					rel="noreferrer"
				>
					<img className={styles.linkImg} src={instagram} alt={'Instagram'} />
					<div className={styles.linkName}>Instagram</div>
				</a>
			</div>
		</div>
	);
};

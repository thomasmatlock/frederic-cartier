import styles from './NavAnimated.module.scss';
import { useProgress } from '@react-three/drei';
import { useRef, useEffect, useState, use, useContext } from 'react';
import UserContextProvider from '../store/userContext';
import InputContextProvider from '../store/inputContext';
import { useFrame } from '@react-three/fiber';

export default function Nav() {
	useEffect(() => {}, []);
	const {
		about,
		films,
		goToHome,
		goToFilms,
		goToAbout,
		showFilm1,
		showFilm2,
		showFilm3,
		showFilm4,
		showFilm5,
	} = useContext(InputContextProvider);

	return (
		<nav className={styles.nav}>
			<div className={styles.nav_item} onClick={goToFilms}>
				<p
					className={
						about ? styles.nav_item_text_fadeOutLeft : styles.nav_item_text_fadeInLeft
					}
				>
					FILMS
				</p>
				<p
					className={
						about ? styles.nav_item_text_fadeInRight : styles.nav_item_text_fadeOutRight
					}
				>
					ABOUT
				</p>
			</div>
			<div className={styles.nav_item} onClick={goToHome}>
				<p className={styles.nav_item_text}>FREDERIC CARTIER</p>
			</div>
			<div className={styles.nav_item} onClick={goToAbout}>
				<p
					className={
						about || films
							? styles.nav_item_text_fadeOutLeft
							: styles.nav_item_text_fadeInLeft
					}
				>
					ABOUT
				</p>
				<p
					className={
						about || films
							? styles.nav_item_text_fadeInRight
							: styles.nav_item_text_fadeOutRight
					}
				>
					CLOSE
				</p>
			</div>
		</nav>
	);
}
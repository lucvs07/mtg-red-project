import React from 'react';
import './styles.css';
import { Fire } from '@phosphor-icons/react';


export function Footer(){
    return(
        <footer id="footer">
            <span>Voltar ao <a href='#top'>topo</a></span>
            <Fire size={48}/>
        </footer>
    );
}